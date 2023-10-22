module.exports = {
  getPost: async (req, res) => {
    res.status(200).send('getPost');
  },
  createPost: async (req, res) => {
    res.status(200).send('createPost');
  },
  updatePost: async (req, res) => {
    res.status(200).send('updatePost');
  },
  deletePost: async (req, res) => {
    res.status(200).send('deletePost');
  },
};
