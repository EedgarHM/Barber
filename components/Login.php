<form action="action_page.php" class="login-form" method="post">
      <div class="login-form__img-container">
        <img src="../img/user-img.jpg" alt="Avatar" class="login-form__img-avatar">
      </div>

      <div class="login-form__container">
        <label for="uname"><b>Usuario</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required>

        <label for="psw"><b>Contrase;a</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required>

        <button class="login-form__btn-signin" type="submit">Login</button>
        <label>
          <input type="checkbox" checked="checked" name="remember"> Remember me
        </label>
      </div>      
    </form>
