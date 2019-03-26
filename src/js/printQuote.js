//multistringtoarrayjs

var qArray = [ "A good soldier obeys without question. A good officer commands without doubt.",
"Blessed is the mind too small for doubt.",
"To admit defeat is to blaspheme against the Emperor.",
"For those who seek perfection there can be no rest on this side of the grave.",
"The difference between heresy and treachery is ignorance.",
"Knowledge is power, guard it well.",
"An open mind is like a fortress with its gates unbarred and unguarded.",
"Innocence proves nothing.",
"Success is commemorated; Failure merely remembered.",
"Even a man who has nothing can still offer his life.",
"Only in death does duty end.",
"No man died in His service that died in vain.",
"Hope is the first step on the road to disappointment.",
"There is no such thing as innocence, only degrees of guilt.",
"Beginning reform is beginning revolution.",
"Educate men without faith and you but make them clever devils.",
"Success is measured in blood; yours or your enemy´s.",
"The man who has nothing can still have faith.",
"Burn the heretic. Kill the mutant. Purge the unclean.",
"It is better to die for the Emperor than to live for yourself.",
"Fear denies faith.",
"Foolish are those who fear nothing, yet claim to know everything.",
"Brave are they who know everything yet fear nothing.",
"Happiness is a delusion of the weak.",
"All souls call out for salvation.",
"Life is the Emperor's currency, spend it well.",
"A suspicious mind is a healthy mind.",
"Cowards die in shame.",
"Faith without deeds is worthless.",
"True Happiness stems only from Duty.",
"The blood of martyrs is the seed of the Imperium.",
"Heresy grows from idleness.",
"There is only the Emperor, and he is our shield and protector.",
"Truth is Subjective.",
"Damnation is Eternal.",
"Know the Mutant; Kill the Mutant.",
"To Question is to doubt.",
"He who keeps silent consents.",
"Prayer cleanses the soul, Pain cleanses the body.",
"Death by thy Compass.",
"Zeal is its own Excuse.",
"Work earns Salvation.",
"Without him there is nothing.",
"Only the Emperor is all.",
"Hatred is the emperor's greatest gift to humanity.",
"Victory needs no explanation, defeat allows none.",
"A small mind is easily filled with faith."]

function selectQuote() {
    return qArray[Math.floor(Math.random() * qArray.length)];
}

function removeVid(e) {
      var element = document.getElementById("exVid");
      //console.log('ended')
      element.parentNode.removeChild(element);
      }

function showHide(divId) {
  var x = document.getElementById(divId);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}