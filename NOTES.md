<h2>🗺️ Indicator Layer Selection &amp; Compare Mode</h2>

<h3>🔘 Default Mode</h3>
<p>
  By default, only one indicator layer can be visualized at a time.<br />
  Users can select one layer using <strong>radio buttons</strong> in the layer list.
</p>

<h3>🟰 Compare Mode</h3>
<p>
  Compare mode allows users to <strong>select and visualize two indicator layers simultaneously</strong>.<br />
  Activated by clicking the <strong>“Compare” button</strong> in the map toolbar.
</p>

<p><strong>Once enabled:</strong></p>
<ul>
  <li>Radio buttons in the layer list are replaced with checkboxes.</li>
  <ul>
    <li> you can find this here and this is already written and only need you to change max select from 1 to 2. /home/web/project/django_project/frontend/src/components/Map/SidePanelTree/ContextLayer/index.jsx
  </ul>
  <li>Users can select up to two layers.</li>
</ul>

<h3>🖍️ Visualization Behavior</h3>

<h4>First Selected Layer</h4>
<ul>
  <li>Displayed with <strong>thicker outlines</strong></li>
  <li><strong>Color-coded</strong> based on the indicator</li>
  <li><strong>Rendered on top</strong></li>
</ul>

<h4>Second Selected Layer</h4>
<ul>
  <li><strong>Rendered beneath</strong> the first</li>
  <li>Visualized using <strong>filled colors</strong></li>
  <li>Maintains distinction with <strong>semi-transparency</strong></li>
</ul>

<h3>📊 Legend &amp; Widgets</h3>
<ul>
