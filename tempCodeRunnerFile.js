if(remove_last[2]==="P" && remove_last[3]==="M"){
    remove_last = remove_last.slice(0,-2)
    format_data[2] = remove_last.join("")
    let new_time = Number(format_data[0])
    let new_time_in_hours = new_time + 12
    format_data[0] = new_time_in_hours.toString()
    format_data = format_data.join(":")
}else if(remove_last[2]==="A" && remove_last[3]==="M"){
    remove_last = remove_last.slice(0,-2)
    format_data[2] = remove_last.join("")
    format_data = format_data.join(":")
}