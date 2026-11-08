// to be ported to the mod.

ServerEvents.tags("item", event => {

    global.OVERWORLD_WOOD_TYPES.forEach(type => {

        let mod = global.WOOD_TYPE_TO_MOD[type]

        // planks
        GIVES_PLANK.forEach(item => {
            event.add(`modpack:cutting/wood/for_planks/${type}`, `${mod}:wood/planks/${type}_${item}`)
        })

        if (mod == "tfc") // jarbnets for tfc wood types are registered by firmalife
        {
            event.add(`modpack:cutting/wood/for_planks/${type}`, `firmalife:wood/jarbnet/${type}`)
        }
        else
        {
            event.add(`modpack:cutting/wood/for_planks/${type}`, `${mod}:wood/jarbnet/${type}`)
        }
        event.add(`modpack:cutting/wood/for_planks/${type}`, `${mod}:wood/boat/${type}`)

        // lumber
        GIVES_LUMBER.forEach(item => {
            event.add(`modpack:cutting/wood/for_lumber/${type}`, `${mod}:wood/planks/${type}_${item}`)
        })
        event.add(`modpack:cutting/wood/for_lumber/${type}`, `${mod}:wood/support/${type}`)
    })

    // terracotta and alabaster
    global.DYE_COLOURS.forEach(colour => {
        BLOCK_SHAPES.forEach(shape => {

            if (shape == "wall") {

                event.add(`modpack:cutting/alabaster_brick`, `tfc:alabaster/bricks/${colour}_${shape}`)
                event.add(`modpack:cutting/alabaster_brick`, `tfc:alabaster/polished/${colour}_${shape}`)
                return
            }

            if (shape == "bricks") {
                //event.add(`modpack:cutting/terracotta_bricks/${colour}`, `hearth_and_home:${colour}_terracotta_bricks`)
                //event.add(`modpack:cutting/terracotta_bricks/${colour}`, `hearth_and_home:${colour}_shingles`)
            } else {
                //event.add(`modpack:cutting/terracotta_bricks/${colour}`, `hearth_and_home:${colour}_terracotta_brick_${shape}`)
                //event.add(`modpack:cutting/terracotta_bricks/${colour}`, `hearth_and_home:${colour}_shingle_${shape}`)
                event.add(`modpack:cutting/alabaster_brick`, `tfc:alabaster/bricks/${colour}_${shape}`)
                event.add(`modpack:cutting/alabaster_brick`, `tfc:alabaster/polished/${colour}_${shape}`)
            }
        })
        event.add(`modpack:cutting/gypsum`, `tfc:alabaster/raw/${colour}`)
    })
    event.add(`modpack:cutting/gypsum`, "tfc:alabaster/raw")

    event.add(`modpack:cutting/alabaster_brick`, "tfc:alabaster/polished")
    event.add(`modpack:cutting/alabaster_brick`, "tfc:alabaster/bricks")

    event.add(`modpack:cutting/terracotta_bricks/plain`, "hearth_and_home:terracotta_bricks")
    event.add(`modpack:cutting/terracotta_bricks/plain`, "hearth_and_home:terracotta_brick_stairs")
    event.add(`modpack:cutting/terracotta_bricks/plain`, "hearth_and_home:terracotta_brick_slab")
    event.add(`modpack:cutting/terracotta_bricks/plain`, "hearth_and_home:shingles")
    event.add(`modpack:cutting/terracotta_bricks/plain`, "hearth_and_home:shingle_stairs")
    event.add(`modpack:cutting/terracotta_bricks/plain`, "hearth_and_home:shingle_slab")

    // rock
    global.ROCK_TYPES.forEach(rock => {
        BRICK_TYPES.forEach(type => {
            BLOCK_SHAPES.forEach(shape => {

                if (shape == "bricks") {
                    event.add(`modpack:cutting/rock/${rock}`, `tfc:rock/${type}/${rock}`)
                    event.add(`modpack:cutting/rock/${rock}`, `tfc:rock/smooth/${rock}`)
                } else {
                    event.add(`modpack:cutting/rock/${rock}`, `tfc:rock/${type}/${rock}_${shape}`)
                    event.add(`modpack:cutting/rock/${rock}`, `tfc:rock/smooth/${rock}_${shape}`)
                }
            })
        })
        event.add(`modpack:cutting/rock/${rock}`, `tfc:rock/chiseled/${rock}`)
    })

    // mud bricks
    global.TFC_SOIL_TYPES.forEach(soil => {
        BLOCK_SHAPES.forEach(shape => {

            if (shape == "bricks") {
                event.add(`modpack:cutting/mud/${soil}/brick`, `tfc:mud_bricks/${soil}`)
            } else {
                event.add(`modpack:cutting/mud/${soil}/brick`, `tfc:mud_bricks/${soil}_${shape}`)
            }
        })
    })

    // sandstone
    global.TFC_SAND_COLOURS.forEach(colour => {
        BLOCK_SHAPES.forEach(shape => {

            if (shape == "bricks") {
                event.add(`modpack:cutting/sandstone/${colour}`, `tfc:smooth_sandstone/${colour}`)
                event.add(`modpack:cutting/sandstone/${colour}`, `tfc:raw_sandstone/${colour}`)
                event.add(`modpack:cutting/sandstone/${colour}`, `tfc:cut_sandstone/${colour}`)
            } else {
                event.add(`modpack:cutting/sandstone/${colour}`, `tfc:smooth_sandstone/${colour}_${shape}`)
                event.add(`modpack:cutting/sandstone/${colour}`, `tfc:raw_sandstone/${colour}_${shape}`)
                event.add(`modpack:cutting/sandstone/${colour}`, `tfc:cut_sandstone/${colour}_${shape}`)
            }
        })
    })
})
