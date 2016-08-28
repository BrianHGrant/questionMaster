import Ember from 'ember';

export function avatarDisplay(params) {
  var avatar_id = params[0];
  var avatar_src = "";

  switch(avatar_id) {
    case 1:
      avatar_src = "tiger-1454407.png";
      break;
    case 2:
      avatar_src = "man-1458576.png";
      break;
    case 3:
      avatar_src = "shark-1454245.png";
      break;
    case 4:
      avatar_src = "panda-1454345.png";
      break;
    case 5:
      avatar_src = "cat-1424748.png";
      break;
    case 6:
      avatar_src = "afro-american-man.png";
      break;
    case 7:
      avatar_src = "girl-1424685.png";
      break;
    case 8:
      avatar_src = "girl-1457006.png";
      break;
    case 9:
      avatar_src = "tiger-1454631.png";
      break;
    case 10:
      avatar_src = "woman-book-01.png";
      break;
  }

  return Ember.String.htmlSafe('<img src="http://www.bhgconcepts.com/img/avatars/'+ avatar_src +'" class="img-responsive img-rounded img-avatar">');
}

export default Ember.Helper.helper(avatarDisplay);
