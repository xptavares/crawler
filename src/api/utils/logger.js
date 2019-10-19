let error = (err, req, callback) => {
    console.error(err)
    return callback()
}

module.exports = {
  error
}
