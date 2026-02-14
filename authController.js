exports.register = (req, res) => {
  const { name, email, password } = req.body;

  res.status(201).json({
    success: true,
    message: 'Usuário registrado com sucesso',
    user: {
      name,
      email
    }
  });
};

exports.login = (req, res) => {
  const { email } = req.body;

  res.status(200).json({
    success: true,
    message: 'Login realizado com sucesso',
    user: {
      email
    }
  });
};
