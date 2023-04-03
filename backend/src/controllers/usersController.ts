import { Request, Response } from 'express'

const getUsers = (req: Request, res: Response) => {
	res.send('GET USERS')
}

export default getUsers
