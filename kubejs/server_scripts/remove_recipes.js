onEvent('recipes', (event) => {

    const id = [
    'techreborn:crafting_table/solar_panel/ultimate_solar_panel_alt',
    'techreborn:crafting_table/solar_panel/industrial_solar_panel_alt',
    'techreborn:crafting_table/solar_panel/advanced_solar_panel_alt',
    'techreborn:crafting_table/solar_panel/advanced_solar_panel_alt',
    'techreborn:rolling_machine/minecart',
    'vanilla-excavators:obsidian_excavator',
    'vanilla-hammers:obsidian_hammer',
    'croptopia:tomato_to_tomato_seed_shapeless',
    'croptopia:cabbage_to_cabbage_seed_shapeless',

    ];

    const output = [
    'blockus:white_oak_small_logs',
    'blockus:dark_oak_small_logs',
    'blockus:acacia_small_logs',
    'blockus:jungle_small_logs',
    'blockus:birch_small_logs',
    'blockus:spruce_small_logs',
    'blockus:oak_small_logs',
    'blockus:golden_bars',
    'techreborn:compressor',
    'kibe:angel_ring',
    'kibe:light_ring',
    'chisel:chisel',
    'croptopia:bacon',
    'croptopia:cooked_bacon',
    'croptopia:knife',
    'bewitchment:raw_silver_block',
    'modern_industrialization:replicator',
    'modern_industrialization:uu_matter',
    'basicaiots:tin_aiot',
    'basicaiots:copper_aiot',
    'basicaiots:silver_aiot',
    'basicaiots:steel_aiot',
    'basicaiots:lead_aiot',
    ];

    id.forEach((id) => {
        event.remove({ id: id });
    });

    output.forEach((output) => {
        event.remove({ output: output });
    });
});