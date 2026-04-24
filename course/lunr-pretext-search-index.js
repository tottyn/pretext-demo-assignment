var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "activities",
  "level": "1",
  "url": "activities.html",
  "type": "Chapter",
  "number": "",
  "title": "Statistical Thinking",
  "body": " Statistical Thinking    Statistical Thinking Activity    Objectives: This activity highlights the statistical thinking mindset, where we observe several ways to quantitatively summarize data and then draw justified conclusions about a population.    Does this drug work?  The below table reports the number of people who became very sick after contracting an illness, broken out by if they took a particular drug. We will refer to those who took the drug as the treatment group, and those who did not take the drug as the control group. Note that the drug was not randomly assigned in this setting.   Table 1     Control  Treatment  Overall    Sick  253  402  655    Total  151,054  47,008  198,062        (a) Calculate the proportions of the control group and the treatment group who became sick, and compare the proportions. Which group had a higher rate of sickness?      (b) What other factors may we want to consider before concluding that the drug makes you more likely to get very sick after contracting the illness?     One additional factor we have access to is the age (younger or older) of the people. Below is a table that includes this information.   Table 2     Control  Treatment  Overall     Younger  Older  Younger  Older  Younger  Older    Sick  48  205  13  389  61  594    Total  147,612  3,442  25,536  21,472  173,148  24,912        (c) Explore the data in Table 2 by computing several more proportions. In particular, compute the sickness rate for:   (i) the younger control people and (ii) the younger treatment people  (iii) the older control people and (iv) the older treated people       (d) Compute the proportion of older people in the control group and older people in the treated group      (e) What do you notice about the proportions you just calculated? Do these results really show that the drug does not work?      "
},
{
  "id": "statistical-thinking-activity",
  "level": "2",
  "url": "activities.html#statistical-thinking-activity",
  "type": "Activity",
  "number": "1",
  "title": "Statistical Thinking Activity.",
  "body": " Statistical Thinking Activity    Objectives: This activity highlights the statistical thinking mindset, where we observe several ways to quantitatively summarize data and then draw justified conclusions about a population.    Does this drug work?  The below table reports the number of people who became very sick after contracting an illness, broken out by if they took a particular drug. We will refer to those who took the drug as the treatment group, and those who did not take the drug as the control group. Note that the drug was not randomly assigned in this setting.   Table 1     Control  Treatment  Overall    Sick  253  402  655    Total  151,054  47,008  198,062        (a) Calculate the proportions of the control group and the treatment group who became sick, and compare the proportions. Which group had a higher rate of sickness?      (b) What other factors may we want to consider before concluding that the drug makes you more likely to get very sick after contracting the illness?     One additional factor we have access to is the age (younger or older) of the people. Below is a table that includes this information.   Table 2     Control  Treatment  Overall     Younger  Older  Younger  Older  Younger  Older    Sick  48  205  13  389  61  594    Total  147,612  3,442  25,536  21,472  173,148  24,912        (c) Explore the data in Table 2 by computing several more proportions. In particular, compute the sickness rate for:   (i) the younger control people and (ii) the younger treatment people  (iii) the older control people and (iv) the older treated people       (d) Compute the proportion of older people in the control group and older people in the treated group      (e) What do you notice about the proportions you just calculated? Do these results really show that the drug does not work?    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
