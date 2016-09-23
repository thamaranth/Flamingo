export default (bool) => {

  return typeof bool === 'boolean' ||
            (typeof bool === 'object' && typeof bool.valueOf() === 'boolean')
}
