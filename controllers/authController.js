const User = require('../models/User');

exports.getLogin = (req, res) => {
  res.render('login');
};

exports.postLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !(await user.comparePassword(password))) {
    return res.render('login', { error: 'Credenciais inválidas' });
  }

  req.session.userId = user._id;
  res.redirect('/dashboard');
};

exports.getDashboard = async (req, res) => {
  if (!req.session.userId) return res.redirect('/login');
  try {
    const users = await User.find({}, 'email').lean();; // busca todos os usuários, pegando só o email
    res.render('dashboard', { users });
  } catch (err) {
    res.send('Erro ao buscar usuários: ' + err.message);
  }
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('connect.sid');
    res.redirect('/login');
  });
};

exports.getHome = (req, res) => {
  res.render('home');
};

exports.getRegister = (req, res) => {
  res.render('register');
};

exports.postRegister = async (req, res) => {
  const { email, password, confirm_password } = req.body;

  // Verifica se as senhas são iguais
  if (password !== confirm_password) {
    return res.render('register', { error: 'As senhas não conferem. Tente novamente.' });
  }

  try {
    const user = new User({ email, password });
    await user.save();
    res.redirect('/login');
  } catch (err) {
    res.send('Erro ao cadastrar: ' + err.message);
  }
};