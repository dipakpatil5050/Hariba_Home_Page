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




<div className="card-image">
          <img src={item.src} alt={item.title} />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h1>{item.title}</h1>
          </div>
          <div className="card-price">
            <IoPricetagOutline />
            <h1>${item.price}</h1>
          </div>
        </div>
        <div className="card-action">
          <button
            className="btn btn-primary"
            onClick={() => {
              setShowModal(true);