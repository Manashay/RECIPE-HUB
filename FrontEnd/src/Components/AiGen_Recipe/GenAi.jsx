import { useState } from "react";
import "./GenAi.css";
import axios from 'axios'

const Spinner = () => <div className="spinner" />;

export default function GenAi() {
  const [prompt, setPrompt]   = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult]   = useState(null);
  const [error, setError]     = useState("");

const generateRecipe = async () => {
  if (!prompt.trim()) return;
  setLoading(true);
  setError("");
  setResult(null);

  try {
    // Because of your proxy, this goes to http://localhost:5000/api/gen-ai-recipe
    const res = await axios.post('/api/gen-ai-recipe', { prompt });
    setResult(res.data);
  } catch (e) {
    setError(e.response?.data?.detail || e.response?.data?.error || "Could not generate recipe. Is the server running?");
  } finally {
    setLoading(false);
  }
};

  const META_ITEMS = result ? [
    { label: "Prep Time", value: result.prepTime,  icon: "⏱" },
    { label: "Cook Time", value: result.cookTime,  icon: "🔥" },
    { label: "Servings",  value: result.servings,  icon: "👥" },
    { label: "Difficulty",value: result.difficulty,icon: "📊" },
  ] : [];

  return (
    <div className="recipe-ai-wrapper">

      {/* ── Hero ── */}
      <div className="hero-section-recipe-ai">
        <div className="hero-circle-top" />
        <div className="hero-circle-bottom" />

        <div className="hero-badge">✨ Powered by Groq AI</div>

        <h1 className="hero-titleGen">
          Describe Your Perfect<br />
          <span>Recipe</span>
        </h1>

        <p className="hero-subtitleGen">
          Tell us what you're craving, what's in your fridge, or any dietary
          preference — we'll craft the perfect recipe and find the best tutorials.
        </p>

        <div className="input-wrapper">
          <textarea
            className="recipe-textarea"
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            placeholder="e.g. 'A spicy pasta with whatever's in my fridge' or 'High-protein keto breakfast under 20 mins'..."
            rows={3}
            onKeyDown={e =>
              e.key === "Enter" && !e.shiftKey &&
              (e.preventDefault(), generateRecipe())
            }
          />
          <button
            className="gen-btn"
            onClick={generateRecipe}
            disabled={loading || !prompt.trim()}
          >
            {loading ? <><Spinner /> Generating Recipe...</> : <>🍳 Generate Recipe</>}
          </button>
        </div>
      </div>

      {/* ── Error ── */}
      {error && <div className="error-box">{error}</div>}

      {/* ── Result ── */}
      {result && (
        <div className="recipe-card">

          {/* Title Card */}
          <div className="title-card">
            <div className="tags-row">
              {result.tags?.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <h2 className="recipe-main-title">{result.title}</h2>
            <p className="recipe-description">{result.description}</p>
            <div className="meta-grid">
              {META_ITEMS.map(m => (
                <div key={m.label} className="meta-badge">
                  <span className="meta-icon">{m.icon}</span>
                  <span className="meta-value">{m.value}</span>
                  <span className="meta-label">{m.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ingredients + Steps */}
          <div className="content-grid">

            {/* Ingredients */}
            <div className="card-panel">
              <h3 className="panel-heading">
                <span className="panel-heading-badge">🧂</span>
                Ingredients
              </h3>
              <ul className="ingredients-list">
                {result.ingredients?.map((ing, i) => (
                  <li key={i} className="ingredient-item">
                    <span className="ingredient-dot">•</span> {ing}
                  </li>
                ))}
              </ul>
            </div>

            {/* Steps */}
            <div className="card-panel">
              <h3 className="panel-heading">
                <span className="panel-heading-badge">📋</span>
                Instructions
              </h3>
              <div className="steps-list">
                {result.steps?.map((step, i) => (
                  <div key={i} className="step-row">
                    <div className="step-num">{i + 1}</div>
                    <p className="step-text">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pro Tip */}
          {result.tips && (
            <div className="pro-tip">
              <span className="pro-tip-icon">💡</span>
              <div>
                <div className="pro-tip-label">PRO TIP</div>
                <p className="pro-tip-text">{result.tips}</p>
              </div>
            </div>
          )}

          {/* External Links */}
          <div className="links-panel">
            <h3>📺 Find More on These Platforms</h3>
            <p>Watch tutorials and explore variations across the web</p>
            <div className="links-grid">
              {result.links?.map((link, i) => (
                <a
                  key={i}
                  className="link-card"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="link-icon-box">{link.icon}</div>
                  <div>
                    <div className="link-platform">{link.platform}</div>
                    <div className="link-title">{link.title}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Try Another */}
          <div className="try-another-wrapper">
            <button
              className="try-another-btn"
              onClick={() => { setResult(null); setPrompt(""); }}
            >
              🔄 Try Another Recipe
            </button>
          </div>
        </div>
      )}
    </div>
  );
}