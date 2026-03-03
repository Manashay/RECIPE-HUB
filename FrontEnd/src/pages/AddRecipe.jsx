import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Leaf, Save, ArrowLeft, Plus, X, Loader } from "lucide-react";
import "./EditRecipe.css"; // reuse same styles

export default function AddRecipe() {
  const navigate = useNavigate();
  const [saving, setSaving]   = useState(false);
  const [error, setError]     = useState("");
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    title:        "",
    description:  "",
    imageUrl:     "",
    prepTime:     "",
    servings:     "",
    calories:     "",
    tags:         [],
    ingredients:  [],
    instructions: [],
    nutrition:    [],
  });

  // ── Input buffers ───────────────────────────────────────────
  const [tagInput,   setTagInput]   = useState("");
  const [nutriInput, setNutriInput] = useState({ label: "", value: "" });
  const [ingrInput,  setIngrInput]  = useState({ name: "", quantity: "", unit: "pcs" });
  const [stepInput,  setStepInput]  = useState("");

  // ── Basic field change ──────────────────────────────────────
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ── Tags ────────────────────────────────────────────────────
  const addTag = () => {
    const t = tagInput.trim();
    if (t && !form.tags.includes(t)) {
      setForm({ ...form, tags: [...form.tags, t] });
      setTagInput("");
    }
  };
  const removeTag = (tag) =>
    setForm({ ...form, tags: form.tags.filter((t) => t !== tag) });

  // ── Ingredients ─────────────────────────────────────────────
  const addIngredient = () => {
    if (ingrInput.name.trim() && ingrInput.quantity) {
      setForm({
        ...form,
        ingredients: [
          ...form.ingredients,
          {
            name:     ingrInput.name.trim(),
            quantity: Number(ingrInput.quantity), // 👈 must be Number
            unit:     ingrInput.unit.trim() || "pcs",
            added:    false,
          },
        ],
      });
      setIngrInput({ name: "", quantity: "", unit: "pcs" });
    }
  };
  const removeIngredient = (i) =>
    setForm({ ...form, ingredients: form.ingredients.filter((_, idx) => idx !== i) });

  // ── Instructions ────────────────────────────────────────────
  const addStep = () => {
    const text = stepInput.trim();
    if (text) {
      setForm({
        ...form,
        instructions: [
          ...form.instructions,
          { stepNumber: form.instructions.length + 1, text },
        ],
      });
      setStepInput("");
    }
  };
  const removeStep = (i) => {
    const updated = form.instructions
      .filter((_, idx) => idx !== i)
      .map((s, idx) => ({ ...s, stepNumber: idx + 1 })); // renumber
    setForm({ ...form, instructions: updated });
  };

  // ── Nutrition ───────────────────────────────────────────────
  const addNutri = () => {
    if (nutriInput.label.trim() && nutriInput.value.trim()) {
      setForm({ ...form, nutrition: [...form.nutrition, { ...nutriInput }] });
      setNutriInput({ label: "", value: "" });
    }
  };
  const removeNutri = (i) =>
    setForm({ ...form, nutrition: form.nutrition.filter((_, idx) => idx !== i) });

  // ── Submit ──────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validate required fields
    if (!form.title.trim())       return setError("Title is required.");
    if (!form.description.trim()) return setError("Description is required.");

    setSaving(true);
    try {
      const payload = {
        ...form,
        servings: form.servings ? Number(form.servings) : 1,   // 👈 convert to Number
        calories: form.calories ? Number(form.calories) : 0,   // 👈 convert to Number
      };

      const { data } = await axios.post("/api/recipes", payload);
      setSuccess(true);
      setTimeout(() => navigate(`/recipeDetails/${data._id}`), 1200);
    } catch (err) {
      setError(err.response?.data?.message || "Server error. Check all required fields.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="edit-page">
      {/* Header */}
      <div className="edit-header">
        <button className="edit-back" onClick={() => navigate(-1)}>
          <ArrowLeft size={16} /> Back
        </button>
        <div className="edit-header-title">
          <div className="edit-logo-icon">
            <Leaf size={16} fill="#fff" strokeWidth={0} />
          </div>
          <h1>Add New Recipe</h1>
        </div>
      </div>

      {error   && <div className="edit-error">{error}</div>}
      {success && <div className="edit-success">✅ Recipe added! Redirecting...</div>}

      <form onSubmit={handleSubmit} className="edit-form">

        {/* ── Basic Info ─────────────────────────────────── */}
        <div className="edit-section">
          <h2 className="edit-section-title">Basic Info</h2>
          <div className="edit-grid-2">
            <div className="edit-field">
              <label>Recipe Title *</label>
              <input name="title" value={form.title} onChange={handleChange} required placeholder="e.g. Spaghetti Carbonara" />
            </div>
            <div className="edit-field">
              <label>Image URL</label>
              <input name="imageUrl" value={form.imageUrl} onChange={handleChange} placeholder="https://..." />
            </div>
          </div>
          <div className="edit-field">
            <label>Description *</label>
            <textarea name="description" value={form.description} onChange={handleChange} rows={3} required placeholder="Short description of the recipe..." />
          </div>
        </div>

        {/* ── Quick Stats ────────────────────────────────── */}
        <div className="edit-section">
          <h2 className="edit-section-title">Quick Stats</h2>
          <div className="edit-grid-3">
            <div className="edit-field">
              <label>Prep Time</label>
              <input name="prepTime" value={form.prepTime} onChange={handleChange} placeholder="e.g. 30 mins" />
            </div>
            <div className="edit-field">
              <label>Servings</label>
              <input name="servings" value={form.servings} onChange={handleChange} placeholder="e.g. 4" type="number" min="1" />
            </div>
            <div className="edit-field">
              <label>Calories</label>
              <input name="calories" value={form.calories} onChange={handleChange} placeholder="e.g. 450" type="number" min="0" />
            </div>
          </div>
        </div>

        {/* ── Ingredients ────────────────────────────────── */}
        <div className="edit-section">
          <h2 className="edit-section-title">Ingredients</h2>
          <div className="edit-ingr-row">
            <input
              placeholder="Name (e.g. Flour)"
              value={ingrInput.name}
              onChange={(e) => setIngrInput({ ...ingrInput, name: e.target.value })}
            />
            <input
              placeholder="Qty (e.g. 2)"
              type="number"
              min="0"
              value={ingrInput.quantity}
              onChange={(e) => setIngrInput({ ...ingrInput, quantity: e.target.value })}
            />
            <select
              value={ingrInput.unit}
              onChange={(e) => setIngrInput({ ...ingrInput, unit: e.target.value })}
            >
              <option value="pcs">pcs</option>
              <option value="grams">grams</option>
              <option value="kg">kg</option>
              <option value="ml">ml</option>
              <option value="cups">cups</option>
              <option value="tbsp">tbsp</option>
              <option value="tsp">tsp</option>
              <option value="liters">liters</option>
            </select>
            <button type="button" className="edit-add-btn" onClick={addIngredient}>
              <Plus size={15} /> Add
            </button>
          </div>

          <div className="edit-ingr-list">
            {form.ingredients.map((ing, i) => (
              <div key={i} className="edit-ingr-item">
                <span className="edit-ingr-name">{ing.name}</span>
                <span className="edit-ingr-qty">{ing.quantity} {ing.unit}</span>
                <button type="button" onClick={() => removeIngredient(i)}><X size={13} /></button>
              </div>
            ))}
          </div>
        </div>

        {/* ── Instructions ───────────────────────────────── */}
        <div className="edit-section">
          <h2 className="edit-section-title">Instructions</h2>
          <div className="edit-step-row">
            <textarea
              placeholder="Describe this step..."
              value={stepInput}
              rows={2}
              onChange={(e) => setStepInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), addStep())}
            />
            <button type="button" className="edit-add-btn" onClick={addStep}>
              <Plus size={15} /> Add Step
            </button>
          </div>

          <div className="edit-steps-list">
            {form.instructions.map((step, i) => (
              <div key={i} className="edit-step-item">
                <span className="edit-step-number">Step {step.stepNumber}</span>
                <span className="edit-step-text">{step.text}</span>
                <button type="button" onClick={() => removeStep(i)}><X size={13} /></button>
              </div>
            ))}
          </div>
        </div>

        {/* ── Tags ───────────────────────────────────────── */}
        <div className="edit-section">
          <h2 className="edit-section-title">Tags</h2>
          <div className="edit-tag-input-row">
            <input
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
              placeholder="Type a tag and press Enter or Add"
            />
            <button type="button" className="edit-add-btn" onClick={addTag}>
              <Plus size={15} /> Add
            </button>
          </div>
          <div className="edit-tags-list">
            {form.tags.map((tag) => (
              <span key={tag} className="edit-tag">
                {tag}
                <button type="button" onClick={() => removeTag(tag)}><X size={12} /></button>
              </span>
            ))}
          </div>
        </div>

        {/* ── Nutrition ──────────────────────────────────── */}
        <div className="edit-section">
          <h2 className="edit-section-title">Nutrition</h2>
          <div className="edit-nutri-input-row">
            <input
              placeholder="Label (e.g. Protein)"
              value={nutriInput.label}
              onChange={(e) => setNutriInput({ ...nutriInput, label: e.target.value })}
            />
            <input
              placeholder="Value (e.g. 22g)"
              value={nutriInput.value}
              onChange={(e) => setNutriInput({ ...nutriInput, value: e.target.value })}
            />
            <button type="button" className="edit-add-btn" onClick={addNutri}>
              <Plus size={15} /> Add
            </button>
          </div>
          <div className="edit-nutri-list">
            {form.nutrition.map((item, i) => (
              <div key={i} className="edit-nutri-item">
                <span className="edit-nutri-label">{item.label}</span>
                <span className="edit-nutri-value">{item.value}</span>
                <button type="button" onClick={() => removeNutri(i)}><X size={13} /></button>
              </div>
            ))}
          </div>
        </div>

        {/* ── Submit ─────────────────────────────────────── */}
        <div className="edit-submit-row">
          <button type="button" className="edit-cancel-btn" onClick={() => navigate(-1)}>
            Cancel
          </button>
          <button type="submit" className="edit-save-btn" disabled={saving}>
            {saving ? <span className="auth-spinner" /> : <><Save size={16} /> Add Recipe</>}
          </button>
        </div>

      </form>
    </div>
  );
}