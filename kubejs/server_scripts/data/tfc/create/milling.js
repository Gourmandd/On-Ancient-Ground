// to be ported to the mod.

ServerEvents.recipes(event => {

    let datagen = Datagen(event).recipe()
    const ITEM = IO_TYPE.ITEM

    const METAL_TO_CREATE_CRUSHED_ORE = {
        "bismuth": "create:crushed_raw_uranium",
        "tin": "create:crushed_raw_tin",
        "nickel": "create:crushed_raw_nickel",
        "chromium": "create:crushed_raw_aluminum",
        "cast_iron": "create:crushed_raw_iron",
        "copper": "create:crushed_raw_copper",
        "gold": "create:crushed_raw_gold",
        "silver": "create:crushed_raw_silver",
        "zinc": "create:crushed_raw_zinc"
    }

    const GRADE_TO_PERCENTAGE = {
        "normal": 25,
        "poor": 15,
        "rich": 35,
        "small": 10,
    }

    const ORE_BONUS = 2

    const PROCESSING_TIME = 200

    const PROCESSING_TIME_HARD = 400

    // Tag was removed, lets replace it with our own at some point.
    /*
    global.TFC_MAKES_DYE_TAGS.forEach(colour =>{

        datagen.createMilling(outputOf(ITEM, `minecraft:${colour}_dye`, 2, 1), inputOf(IO_TYPE.ITEM_TAG, `#tfc:makes_${colour}_dye`, 1))
            .id(`modpack:milling/dye/${colour}`)
            .processingTime(PROCESSING_TIME)
            .generate()
    })

    datagen.createMilling(outputOf(ITEM, "minecraft:light_gray_dye", 2, 1), inputOf(ITEM, "tfc:plant/yucca", 1))
        .id(`modpack:milling/dye/light_gray`)
        .processingTime(PROCESSING_TIME)
        .generate()

    datagen.createMilling(outputOf(ITEM, "minecraft:lime_dye", 2, 1), inputOf(ITEM, "tfc:plant/moss", 1))
        .id(`modpack:milling/dye/lime`)
        .processingTime(PROCESSING_TIME)
        .generate()
    */

    global.TFC_FLOUR_TYPES.forEach(type => {

        datagen.createMilling(outputOf(ITEM, `tfc:food/${type}_flour`, 1, 1), inputOf(ITEM, `tfc:food/${type}_grain`, 1))
            .id(`${mod_id}:milling/flour/${type}`)
            .processingTime(PROCESSING_TIME)
            .generate()
    })

    global.RAW_METALS.forEach(metal => {

        global.ORE_GRADES.forEach(grade => {
            //event.recipes.createMilling(Item.of("create:crushed_raw_zinc").withChance(0.70), "tfc:ore/rich_sphalerite").processingTime(100).id(`modpack:milling/ore/" + global.RAW_METALS_ORES[metal])
            if (metal == "cast_iron" || metal == "copper") {

                global.RAW_METALS_ORES[metal].forEach(entry => {

                    datagen.createMilling(
                        outputOf(ITEM, METAL_TO_CREATE_CRUSHED_ORE[metal], 1, (GRADE_TO_PERCENTAGE[grade] * ORE_BONUS) / 100),
                        inputOf(ITEM, `tfc:ore/${grade}_${entry}`, 1)
                    )
                        .id(`${mod_id}:milling/ore/${grade}_${entry}`)
                        .processingTime(PROCESSING_TIME_HARD)
                        .generate()
                })
                return
            }

            if ((metal == "chromium" && Platform.isLoaded("firmalife"))) {

                datagen.createMilling(
                    outputOf(ITEM, METAL_TO_CREATE_CRUSHED_ORE[metal], 1, (GRADE_TO_PERCENTAGE[grade] * ORE_BONUS) / 100),
                    inputOf(ITEM, `firmalife:ore/${grade}_${global.RAW_METALS_ORES[metal]}`, 1)
                )
                    .id(`${mod_id}:milling/ore/${grade}_chromium`)
                    .processingTime(PROCESSING_TIME_HARD)
                    .generate()
                return
            }

            if (metal !== "chromium") {
                datagen.createMilling(
                    outputOf(ITEM, METAL_TO_CREATE_CRUSHED_ORE[metal], 1, (GRADE_TO_PERCENTAGE[grade] * ORE_BONUS) / 100),
                    inputOf(ITEM, `tfc:ore/${grade}_${global.RAW_METALS_ORES[metal]}`, 1)
                )
                    .id(`${mod_id}:milling/ore/${grade}_${global.RAW_METALS_ORES[metal]}`)
                    .processingTime(PROCESSING_TIME_HARD)
                    .generate()
            }
        })
    })
})
