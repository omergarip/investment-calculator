import { useState } from "react";

export default function UserInput({ userInput, onChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            name="initialInvestment"
            value={userInput.initialInvestment}
            onChange={onChange}
            required
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            name="annualInvestment"
            value={userInput.annualInvestment}
            onChange={onChange}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input
            type="number"
            name="expectedReturn"
            value={userInput.expectedReturn}
            onChange={onChange}
            required
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            name="duration"
            value={userInput.duration}
            onChange={onChange}
            required
          />
        </p>
      </div>
    </section>
  );
}
