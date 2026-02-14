const jwt = require('jsonwebtoken');

// Função para criar token JWT
const generateToken = (user) => {
  return jwt.sign(
    { email: user.email }, // dados que vão dentro do token
    process.env.JWT_SECRET || 'minha_chave_secreta', // chave secreta
    { expiresIn: '1h' } // tempo de expiração do token
  );
};

// Registro
exports.register = (req, res) => {
  const { name, email, password } = req.body;

  // Aqui você colocaria a lógica real de salvar no banco
  const newUser = { name, email };

  const token = generateToken(newUser);

  res.json({
    success: true,
    message: 'Usuário registrado com sucesso',
    user: newUser,
    token: token
  });
};

// Login
exports.login = (req, res) => {
  const { email, password } = req.body;

  // Aqui você validaria o usuário no banco
  const user = { email };

  const token = generateToken(user);

  res.json({
    success: true,
    message: 'Login realizado com sucesso',
    user: user,
    token: token
  });
};

