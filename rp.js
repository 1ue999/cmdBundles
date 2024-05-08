print('Retrieved Code For RP');
print('v2 ultrakill');
let railgunThing=new RailBulletType();
Object.assign(UnitTypes.nova,{
    buildSpeed: 10,
    health: 4000,
    armor: 18
});
UnitTypes.nova.abilities.add(new ForceFieldAbility(40.0, 8, 800.0, 60.0 * 10,8,0));
UnitTypes.nova.abilities.add(new UnitSpawnAbility(UnitTypes.quasar5*60,0.0,0.0));
UnitTypes.nova.weapons.get(0).bullet=railgunThing;
UnitTypes.nova.weapons.get(0).shootSound=Sounds.railgun;
UnitTypes.nova.weapons.get(1).bullet=railgunThing;
UnitTypes.nova.weapons.get(1).shootSound=Sounds.railgun;
Object.assign(railgunThing,{
    damage: 400,
    pointEffect: Fx.railTrail,
    length: 800
});

UnitTypes.bryde.weapons.get(0).shootStatus=StatusEffects.unmoving;
UnitTypes.bryde.weapons.get(0).shootStatusDuration=66;
UnitTypes.bryde.flying=true;
UnitTypes.bryde.abilities.add(new StatusFieldAbility(StatusEffects.overclock, 60.0 * 6.0, 60.0 * 6.0, 60.0));
UnitTypes.bryde.abilities.add(new StatusFieldAbility(StatusEffects.overdrive, 60.0 * 6.0, 60.0 * 6.0, 60.0));
UnitTypes.bryde.rotateSpeed=1000;
UnitTypes.bryde.weapons.get(0).rotateSpeed=1000;
UnitTypes.bryde.weapons.get(1).rotateSpeed=1000;
UnitTypes.bryde.weapons.get(2).rotateSpeed=1000;
UnitTypes.bryde.abilities.add(new RepairFieldAbility(50,60,80));
UnitTypes.bryde.buildSpeed=10;
UnitTypes.bryde.weapons.get(0).bullet.fragBullets=16;
UnitTypes.bryde.weapons.get(0).bullet.fragBullet=Blocks.salvo.ammoTypes.get(Items.thorium).copy();
UnitTypes.bryde.weapons.get(0).bullet.despawnHit=true;
UnitTypes.bryde.weapons.get(0).bullet.fragBullet.speed=8;
UnitTypes.bryde.weapons.get(0).bullet.fragBullet.lifetime=10;
UnitTypes.bryde.weapons.get(0).bullet.fragBullet.damage=70;
UnitTypes.bryde.weapons.get(0).bullet.splashDamage=700;
UnitTypes.bryde.armor=20;
UnitTypes.bryde.health=3000;
UnitTypes.bryde.weapons.get(1).bullet.speed=10;

immortalise=function(unit){
    unit.drag=unit.drag*1E300;
    unit.accel=unit.accel*1E300;
    unit.strafePenalty=1;
    unit.omniMovement=true;
    unit.abilities.add(new ShieldRegenFieldAbility(1E308,1E308,1,0))
};
