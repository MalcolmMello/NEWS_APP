export const formatDay = (time: Date) => {
    return time.getDay() < 10 ? `0${time.getDay()}` : `${time.getDay()}`
}
export const formatMonth = (time: Date) => {
    return time.getMonth() < 10 ? `0${time.getMonth()}` : `${time.getMonth()}`
}
export const formatYear = (time: Date) => {
    return time.getFullYear().toString()
}