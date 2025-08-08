
function negatori(){
    const img=document.getElementById("niga");
    if (img.src==="https://www.meme-arsenal.com/memes/9cfcee65b81f3d4d1118d57f1b4bf225.jpg"){
        img.setAttribute("src","https://mass-images.pro/files/preview/3/15/6d991d738790760a1a8dd5ddda1780bf.jpg?1753284656680");       
    }
    else{
        img.setAttribute("src","https://www.meme-arsenal.com/memes/9cfcee65b81f3d4d1118d57f1b4bf225.jpg");
    }
    
    const p=document.getElementById("lisi");
    if (p.textContent==="text about niga aloooooooooooot of"){
        p.textContent="лысый хуесос"
    }
    else{
        p.textContent="text about niga aloooooooooooot of"
    }
 
}
