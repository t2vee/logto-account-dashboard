// Copyright (c) 2024 t2vee. All rights reserved.
// Use of this source code is governed by an MPL license.

import Ajv from 'ajv'
import addFormats from "ajv-formats"
import passwordSchema from '../schemas/password'

const ajv = new Ajv()
addFormats(ajv, ['password'])

const validate = ajv.compile(passwordSchema)

export default async (password) => {
	validate(password)
};
