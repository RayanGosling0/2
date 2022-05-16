function sumbit() {
    let name = document.getElementById("name"),
        button = document.getElementById("button"),
        i = document.getElementById("i"),
        value = name.value
    name.remove()
    button.remove()
    i.innerHTML = `занятий на вторник (${value})`
}
