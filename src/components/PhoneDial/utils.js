export const isExists = (items = [], item = Object.assign({})) => {
    return !!items.find(i => i.value === item.value)
}