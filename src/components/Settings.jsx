
import { useTheme } from '../context/ThemeContext';

function Settings() {
  const {
    theme,
    setTheme,
    accent,
    setAccent,
    fontSize,
    setFontSize,
    layout,
    setLayout,
    projectView,
    setProjectView
  } = useTheme();

  function resetSettings() {
    const confirmed = window.confirm(
      'Are you sure you want to reset all settings to their defaults?'
    );

    if (!confirmed) {
      return;
    }

    setTheme('system');
    setAccent('lavender');
    setFontSize('default');
    setLayout('comfortable');
    setProjectView('grid');
  }

  return (
    <section id="settings">
      <h1>Settings</h1>
      <p>Customize your portfolio experience.</p>

      {/* APPEARANCE */}

      <h2>Appearance</h2>

      <div className="setting-group">
        <label htmlFor="theme">Website Theme</label>

        <select
          id="theme"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          <option value="light">Light Mode</option>
          <option value="dark">Dark Mode</option>
          <option value="system">System Default</option>
        </select>
      </div>

      
<div className="setting-group">
  <p className="setting-label" id="accent-label">
    Accent Color
  </p>

  <div className="accent-options" role="group" aria-labelledby="accent-label">
    {[
      { name: 'Dusty Lavender', value: 'lavender', color: '#967DA9' },
      { name: 'Muted Mauve', value: 'mauve', color: '#A17B8F' },
      { name: 'Sage Green', value: 'sage', color: '#82927A' },
      { name: 'Dusty Rose', value: 'rose', color: '#BE8C91' },
      { name: 'Slate Blue', value: 'blue', color: '#718BA5' }
    ].map((option) => (
      <button
        key={option.value}
        type="button"
        className={`accent-option ${
          accent === option.value ? 'selected' : ''
        }`}
        onClick={() => setAccent(option.value)}
        aria-pressed={accent === option.value}
        aria-label={option.name}
      >
        <span
          className="accent-circle"
          style={{ backgroundColor: option.color }}
        >
          {accent === option.value && '✓'}
        </span>

        <span className="accent-name">
          {option.name}
        </span>
      </button>
    ))}
  </div>
  
{/* LIVE APPEARANCE PREVIEW */}

<div className="appearance-preview">
  <div className="preview-header">
    <span className="preview-label">LIVE PREVIEW</span>
    <span className="preview-indicator">
      <span className="preview-dot"></span>
      Active
    </span>
  </div>

  <div className="preview-content">
    <span className="preview-eyebrow">
      YOUR PERSONAL SPACE
    </span>

    <h3>Designed with intention.</h3>

    <p>
      A thoughtful blend of creativity, technology,
      and meaningful digital experiences.
    </p>

    <div className="preview-actions">
      <span className="preview-button">
        Explore Projects
      </span>

      <span className="preview-link">
        Learn More →
      </span>
    </div>
  </div>
</div>

</div>


      <div className="setting-group">
        <label htmlFor="fontSize">Font Size</label>

        <select
          id="fontSize"
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
        >
          <option value="small">Small</option>
          <option value="default">Default</option>
          <option value="large">Large</option>
        </select>
      </div>

      {/* LAYOUT */}

      <h2>Layout</h2>

      <div className="setting-group">
        <label htmlFor="layout">Layout Spacing</label>

        <select
          id="layout"
          value={layout}
          onChange={(e) => setLayout(e.target.value)}
        >
          <option value="compact">Compact</option>
          <option value="comfortable">Comfortable</option>
        </select>
      </div>

      <div className="setting-group">
        <label htmlFor="projectView">Projects Display</label>

        <select
          id="projectView"
          value={projectView}
          onChange={(e) => setProjectView(e.target.value)}
        >
          <option value="grid">Grid View</option>
          <option value="list">List View</option>
        </select>
      </div>

      {/* ABOUT WEBSITE */}

      <h2>About Website</h2>

      <div className="website-info">
        <div className="info-item">
          <h3>Developer Portfolio</h3>
          <p>
            A personal portfolio showcasing projects,
            technical skills, education, and achievements.
          </p>
        </div>

        <div className="info-item">
          <h3>Version</h3>
          <p>2.0 — Development</p>
        </div>

        <div className="info-item">
          <h3>Built With</h3>
          <p>
            React, Vite, JavaScript, HTML5, and CSS3
          </p>
        </div>

        <div className="info-item">
          <h3>Features</h3>
          <p>
            Multi-page navigation, customizable themes,
            accent colors, font sizes, and layout preferences.
          </p>
        </div>

        <div className="info-item">
          <h3>Credits</h3>
          <p>
            Designed and developed as a personal
            portfolio project.
          </p>
        </div>
      </div>

      {/* RESET PREFERENCES */}

      <div className="settings-reset">
        <h2>Reset Preferences</h2>

        <p>
          Restore the website's original appearance
          and layout settings.
        </p>

        <button
          type="button"
          className="reset-settings-btn"
          onClick={resetSettings}
        >
          Reset to Defaults
        </button>
      </div>
    </section>
  );
}

export default Settings;
