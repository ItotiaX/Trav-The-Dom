let ItemCount = 0; 

let deleteButtonHTML = "<span class='del'>Remove</span>";


//click event and star click event

$(document).ready(function () {
    // Initialize the shopping cart item count
    let ShopItemCartCount = 0;
  
    // Click event handler for "Add to Cart" buttons
    $('.add').click(function () {
      
      ShopItemCartCount++;
  
      // Hide the "Your shopping cart is empty" 
      if (ShopItemCartCount > 0) {
        $('#empty').hide();
      }
  
      // Get name and id from clicked element
      let itemName = $(this).attr('name');
      let itemID = $(this).attr('id');
  
      // Create the list item HTML
      let cartLink = "<li class='cartItem' name='" + itemID + "'>" + itemName + " <span class='del'>Remove</span></li>";
  
      // add new item to cart
      $('#cart').append(cartLink);
    });
  
    // remove item when remove is clicked
    $('#cart').on('click', '.del', function () {
      $(this).parent().remove();
      ShopItemCartCount--;
  
      // empty message
      if (ShopItemCartCount === 0) {
        $('#empty').show();
      }
    });

    //star rating click event
        $('.rating img').click(function(){
            //get # of clicked star
            let IndexClick = $(this).index();

            // reset star rating group
            $(this).parent().children('img').attr('src', 'staroff.gif');

            //set cliocked sstar to staron.gif
            $(this).prevAll().addBack().attr('src', 'staron.gif');

        });
    
  });

 