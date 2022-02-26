export const formatDay = (time: Date) => {
    return time.getUTCDate() < 10 ? `0${time.getUTCDate()}` : `${time.getUTCDate()}`
}
export const formatMonth = (time: Date) => {
    return time.getUTCMonth() < 10 ? `0${time.getUTCMonth()+1}` : `${time.getUTCMonth()+1}`
}
export const formatYear = (time: Date) => {
    return time.getUTCFullYear().toString()
}