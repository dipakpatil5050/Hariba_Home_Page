string password = _encryptdecryptClsBase.encrypt(model.Password.Trim().ToLower());
            model.Password = password;
            var oResult = await _authenticationService.AuthenticationLogin(model);

            if (oResult.Success)
            {
                return await GetUserSession(oResult,model);
            }
            else
            {
                model.Message = oResult.Message;
                Request.Headers.Add("CustomMessage", model.Message);
            }
            return BadRequest();
