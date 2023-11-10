$(window).on('xpboot', () => {
    xp.applications.add('solitaire', () => {
      var el = $.parseHTML(`<window width="800" height="800" title="Solitaire">
        <style>
  iframe[seamless]{
    background-color: transparent;
    border: 0px none transparent;
    padding: 0px;
    overflow: hidden;
  }
  .frame-container {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 0px;
    margin: 0px;
  }
    </style>
    
    <div class="frame-container">
      
  <iframe height="100%" seamless="seamless" width="100%" src="https://redhulk.in/solitaire"></iframe>
    </div> 
      </window>`);
      document.body.appendChild(el[0]);
      $(el).updateWindow();
    });
      xp.startmenu.add('solitaire', 'Solitaire', 'program/assets/solitaire.jpg');
  });
  