import React from "react";

const BenefitsPreview = ({ benefitsCostPerPaycheck }) => {
  return (
    <div>
      <h2>Benefits Preview</h2>
      {benefitsCostPerPaycheck.map((data) => (
        <p key={data.id}>
          Healthcare benefits cost per paycheck for {data.name} is `$
          {data.cost.toFixed(2)}
          `;
        </p>
      ))}
    </div>
  );
};

export default BenefitsPreview;
