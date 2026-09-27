let bottleReturnItems = [
    "spectrum:crawfish_cocktail"
]

ItemEvents.foodEaten(event => {
    if (bottleReturnItems.indexOf(event.getItem().getId()) != -1)
    {
        event.getPlayer().give(Item.of("minecraft:glass_bottle"))
    }
})
