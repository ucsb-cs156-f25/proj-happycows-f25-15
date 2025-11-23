import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function CommonsFeaturesForm({ initialFeatures, onSave }) {
  const [features, setFeatures] = useState(initialFeatures || {});

  const handleChange = (featureName) => {
    setFeatures({
      ...features,
      [featureName]: !features[featureName],
    });
  };

  const handleSave = () => {
    if (onSave) {
      onSave(features);
    }
  };

  return (
    <div>
      <h2>Commons Features</h2>
      <Form>
        {Object.entries(features).map(([name, value]) => (
          <Form.Check
            key={name}
            type="checkbox"
            id={`feature-${name}`}
            label={name}
            checked={value}
            onChange={() => handleChange(name)}
          />
        ))}
      </Form>

      <Button variant="primary" onClick={handleSave} className="mt-3">
        Save
      </Button>
    </div>
  );
}
