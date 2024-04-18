// ...............Review for event listensers..................
const reviewForm = document.getElementById('review-form');
const closeFormButton = document.getElementById('close-form');
const writeReviewButton = document.getElementById('write-review-button'); // Replace with your element ID


writeReviewButton.addEventListener("click",()=>{
  reviewForm.style.visibility="visible";
});
closeFormButton.addEventListener("click",()=>{
  if(reviewForm.style.visibility="visible"){
    reviewForm.style.visibility="hidden"
  }
});

// ...................college predictor page JS................
// const  PredictionTable = document.getElementById('prediction-table');
// const  PredictBtn = document.getElementById('Predict-btn');

// PredictBtn.addEventListener("click",()=>{
//   PredictionTable.style.visibility="visible";
// })


// .....................Placement statistics page js....
// const ComparisonResults=document.getElementById('comparison-results');
// const compareBtn=document.getElementById('compare-btn');
// compareBtn.addEventListener("click",()=>{
//   ComparisonResults.getElementsByClassName.visibility="visible";
// });
