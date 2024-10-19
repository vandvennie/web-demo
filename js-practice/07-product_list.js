let proData = [
  {pimage:"./image/cleaning.png", pname: 'Foundations', level: "Beginner", trend: 10284},
  {pimage:"./image/pet.png", pname: 'Full Stack Ruby on Rails', level: "Advanced", trend: 203},
  {pimage:"./image/riding.png", pname: "Full Stack JavaScript", level: "Advanced", trend: 937},
  {pimage:"./image/surfing.png", pname: "jQuery", level: "Advanced", trend: 812},
  {pimage:"./image/traveling.png", pname: "Node.js", level: "Advanced", trend: 1230}


]
for (i=0; i<proData.length; i++) {
  document.write (`<div class="card">`)
    document.write (`<img src="${proData[i].pimage}" alt="" style="background-color: lightblue; width: 200px; height: 180px;">`)
    document.write (`
      <div class="discribe">
        <h4>${proData[i].pname}</h4>
        <div class="tag">
          <div>${proData[i].level}</div>
          <span>
          <img src="./image/play.png" alt="" style="width: 15px; height: 15px;">
          ${proData[i].trend}
          </span>

          </div>
      </div>
    `)
  document.write (`</div>`)
  
}
