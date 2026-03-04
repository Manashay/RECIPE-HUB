import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Leaf, Save, ArrowLeft, Plus, X, Loader } from "lucide-react";
import "./EditRecipe.css";

export default function EditRecipe() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading]   = useState(true);   // fetching original
  const [saving, setSaving]     = useState(false);   // submitting update
  const [error, setError]       = useState("");
  const [success, setSuccess]   = useState(false);

  const [form, setForm] = useState({
    title:       "",
    description: "",
    imageUrl:    "",
    prepTime:    "",
    servings:    "",
    calories:    "",
    tags:        [],          // array of strings
    nutrition:   [],          // array of { label, value }
  });

  // tag/nutrition input buffers
  const [tagInput,   setTagInput]   = useState("");
  const [nutriInput, setNutriInput] = useState({ label: "", value: "" });

  // ── Fetch existing recipe ───────────────────────────────────
  useEffect(() => {
    axios.get(`/api/recipes/${id}`)
      .then(({ data }) => {
        setForm({
          title:       data.title       || "",
          description: data.description || "",
          imageUrl:    data.imageUrl    || "",
          prepTime:    data.prepTime    || "",
          servings:    data.servings    || "",
          calories:    data.calories    || "",
          tags:        data.tags        || [],
          nutrition:   data.nutrition   || [],
        });
      })
      .catch(() => setError("Failed to load recipe."))
      .finally(() => setLoading(false));
  }, [id]);

  // ── Field change ────────────────────────────────────────────
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ── Tag helpers ─────────────────────────────────────────────
  const addTag = () => {
    const t = tagInput.trim();
    if (t && !form.tags.includes(t)) {
      setForm({ ...form, tags: [...form.tags, t] });
      setTagInput("");
    }
  };
  const removeTag = (tag) =>
    setForm({ ...form, tags: form.tags.filter((t) => t !== tag) });

  // ── Nutrition helpers ───────────────────────────────────────
  const addNutri = () => {
    if (nutriInput.label.trim() && nutriInput.value.trim()) {
      setForm({ ...form, nutrition: [...form.nutrition, { ...nutriInput }] });
      setNutriInput({ label: "", value: "" });
    }
  };
  const removeNutri = (index) =>
    setForm({ ...form, nutrition: form.nutrition.filter((_, i) => i !== index) });

  // ── Submit ──────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSaving(true);
    try {
      await axios.put(`/api/recipes/${id}`, form);
      setSuccess(true);
      setTimeout(() => navigate(`/recipeDetails/${id}`), 1200);
    } catch (err) {
      setError(err.response?.data?.message || "Update failed.");
    } finally {
      setSaving(false);
    }
  };

  // ── Loading state ───────────────────────────────────────────
  if (loading) return (
    <div className="edit-loading">
      <Loader size={28} className="edit-spinner-icon" />
      <p>Loading recipe...</p>
    </div>
  );

  return (
    <div className="edit-page">
      {/* Header */}
      <div className="edit-header">
        <button className="edit-back" onClick={() => navigate(-1)}>
          <ArrowLeft size={16} /> Back
        </button>
        <div className="edit-header-title">
          <div className="edit-logo-icon"><Leaf size={16} fill="#fff" strokeWidth={0} /></div>
          <h1>Edit Recipe</h1>
        </div>
      </div>

      {error   && <div className="edit-error">{error}</div>}
      {success && <div className="edit-success">✅ Recipe updated! Redirecting...</div>}

      <form onSubmit={handleSubmit} className="edit-form">

        {/* ── Basic Info ─────────────────────────────────── */}
        <div className="edit-section">
          <h2 className="edit-section-title">Basic Info</h2>
          <div className="edit-grid-2">
            <div className="edit-field">
              <label>Recipe Title</label>
              <input name="title" value={form.title} onChange={handleChange} required placeholder="e.g. Spaghetti Carbonara" />
            </div>
            <div className="edit-field">
              <label>Image URL</label>
              <input name="imageUrl" value={form.imageUrl} onChange={handleChange} placeholder="https://..." />
            </div>
          </div>

          <div className="edit-field">
            <label>Description</label>
            <textarea name="description" value={form.description} onChange={handleChange} rows={3} placeholder="Short description of the recipe..." />
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
              <input name="calories" value={form.calories} onChange={handleChange} placeholder="e.g. 450 kcal" />
            </div>
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
            {saving ? <span className="auth-spinner" /> : <><Save size={16} /> Save Changes</>}
          </button>
        </div>

      </form>
    </div>
  );
}