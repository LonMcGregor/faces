
brows = [' ', '╲', '╱', '︶', '︵', '◠', '◡', '◜', '◝', '◟', '◞']
eyes = ['╴','‐','╶','︲','╹','╻','┃']
bags = brows
nose = [' ']
mouths = ['◠', '◡', '━', '﹏', '﹋']
cheeks = [' ', '⌇', ')', '(', '◯', '〇', '—']

function pick(array){
    return array[Math.floor(Math.random()*(array.length))]
}

function set(place, array){
    document.getElementById(place).innerText = pick(array);
}

function setup(){
    set("leftbrow",brows)
    set("rightbrow",brows)
    set("lefteye",eyes)
    set("righteye",eyes)
    set("leftbag",bags)
    set("nose",nose)
    set("rightbag",bags)
    set("leftcheek",cheeks)
    set("mouth",mouths)
    set("rightcheek",cheeks)
}

document.addEventListener("keydown", setup)
