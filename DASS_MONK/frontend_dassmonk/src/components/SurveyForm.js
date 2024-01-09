import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { json } from "../data";

const SurveyForm = () => {
  const survey = new Model(json);
  survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
  });

  const allVisibleQuestions = survey.getAllQuestions(true);
  // Set all questions into read-only state
  //   allVisibleQuestions.forEach((q) => (q.readOnly = true));

  // Add comment fields to all survey questions

  return <Survey model={survey} />;
};

export default SurveyForm;
