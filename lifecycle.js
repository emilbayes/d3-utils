module.exports = function (enter, update, exit) {
  return function (selection) {
    if (enter != null) selection.enter().call(enter)
    if (update != null)  selection.call(update)
    if (exit != null) selection.exit().call(exit)
  }
}
