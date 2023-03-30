import * as bcrypt from 'bcryptjs'

const users = [
	{
		name: 'Teste 1',
		lastName: 'Sobrenome 1',
		email: 'teste@teste.com.br',
		password: bcrypt.hashSync('teste@teste.com.br', 10),
		isAdmin: true,
	},
	{
		name: 'Teste 2',
		lastName: 'Sobrenome 2',
		email: 'teste2@teste.com.br',
		password: bcrypt.hashSync('teste2@teste.com.br', 10),
	},
]

export default users
