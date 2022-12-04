function geta() {
  return document.querySelector("section.CardsItem.current.showing.showing-first").innerText.split("\n")
}

let Cycle = {}

Cycle.next = function(){
  document.querySelector("#LiveGameStudentTarget > div.StudentLayout > section > div > div.UIDiv.StudyWhileWaitingView-card > div > div > div > div > div > div > div > div.CardsList-navControl.nextButton > span > button")?.click()
}

let dict = {}

function current() {
  let o = geta();
  dict[o[0]] = o[1]
  Cycle.next()
}

function gtd() {
  for (let i = 1; i <= getc(); i++) {current()}
  return [dict, Object.fromEntries(Object.entries(dict).map(n => n.reverse()))]
}
