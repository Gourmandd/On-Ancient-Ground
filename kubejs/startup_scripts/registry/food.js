// ---------------------------------------- //
// Registers various food items and fluids  //
// ---------------------------------------- //

StartupEvents.registry("item", event => {

    event.create(`${id}:nettles`).displayName("Nettles").food(0, 0)

    event.create(`${id}:halloumi`).displayName("Halloumi").food(0, 0)
    event.create(`${id}:fried_halloumi`).displayName("Fried Halloumi").food(0, 0)
    event.create(`${id}:food/brie`).displayName("Brie").food(0, 0)
    event.create(`${id}:soft_chhurpi`).displayName("Soft Chhurpi").food(0, 0)
    event.create(`${id}:hard_chhurpi`).displayName("Hard Chhurpi").food(0, 0)

    event.create(`${id}:food/raw_pasta_dough`).displayName("Raw Pasta Dough").food(0, 0)

    event.create(`${id}:food/amaranth_flour`).displayName("Amaranth Flour").food(0, 0)

    event.create(`${id}:food/myceylon_cookie_dough`).displayName("Myceylon Cookie Dough").food(0, 0)
    event.create(`${id}:food/sweet_berry_cookie_dough`).displayName("Sweet Berry Cookie Dough").food(0, 0)
    event.create(`${id}:food/honey_cookie_dough`).displayName("Honey Cookie Dough").food(0, 0)
    event.create(`${id}:food/syrup_cookie_dough`).displayName("Syrup Cookie Dough").food(0, 0)
    event.create(`${id}:food/cherry_blossom_cookie_dough`).displayName("Cherry Blossom Cookie Dough").food(0, 0)
    event.create(`${id}:food/coffee_cookie_dough`).displayName("Coffee Cookie Dough").food(0, 0)

    event.create(`${id}:food/honey_cake_base`).displayName("Honey Cake Base").food(0, 0)
    event.create(`${id}:food/chocolate_cake_base`).displayName("Chocolate Cake Base").food(0, 0)
    event.create(`${id}:food/cake_base`).displayName("Cake Base").food(0, 0)

    // raw spectrum foods
    event.create(`${id}:food/spectrum/raw_jaramel_trifle`).displayName("Raw Jaramel Trifle").food(0, 0)
    event.create(`${id}:food/spectrum/raw_salted_jaramel_trifle`).displayName("Raw Salted Jaramel Trifle").food(0, 0)
    event.create(`${id}:food/spectrum/raw_demon_trifle`).displayName("Raw Demon Trifle").food(0, 0)
    event.create(`${id}:food/spectrum/raw_monster_trifle`).displayName("Raw Monster Trifle").food(0, 0)

    event.create(`${id}:food/spectrum/raw_scone`).displayName("Raw Scone").food(0, 0)
    event.create(`${id}:food/spectrum/raw_lucky_roll`).displayName("Raw Lucky Roll").food(0, 0)
    event.create(`${id}:food/spectrum/raw_honey_pastry`).displayName("Raw Honey Pastry").food(0, 0)
    event.create(`${id}:food/spectrum/raw_cream_pastry`).displayName("Raw Cream Pastry").food(0, 0)
    event.create(`${id}:food/spectrum/raw_triple_meat_pot_pie`).displayName("Raw Triple Meat Pot Pie").food(0, 0)
    event.create(`${id}:food/spectrum/raw_rabbit_cream_pie`).displayName("Raw Rabbit Cream Pie").food(0, 0)
    event.create(`${id}:food/spectrum/raw_myceylon_pumpkin_pie`).displayName("Raw Myceylon Pumpkin Pie").food(0, 0)
    event.create(`${id}:food/spectrum/raw_myceylon_apple_pie`).displayName("Raw Myceylon Apple Pie").food(0, 0)

    event.create(`${id}:food/spectrum/raw_jaramel_tart`).displayName("Raw Jaramel Tart").food(0, 0)
    event.create(`${id}:food/spectrum/raw_salted_jaramel_tart`).displayName("Raw Salted Jaramel Tart").food(0, 0)
    event.create(`${id}:food/spectrum/raw_ashen_tart`).displayName("Raw Ashen Tart").food(0, 0)
    event.create(`${id}:food/spectrum/raw_weeping_tart`).displayName("Raw Weeping Tart").food(0, 0)
    event.create(`${id}:food/spectrum/raw_whispy_tart`).displayName("Raw Whispy Tart").food(0, 0)
    event.create(`${id}:food/spectrum/raw_puff_tart`).displayName("Raw Puff Tart").food(0, 0)
})
