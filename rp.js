print('Retrieved Code For RP');

UnitTypes.nova.abilities.add(new ForceFieldAbility(32.0, 2.5, 500.0, 60.0 * 10,8,0));
UnitTypes.nova.abilities.add(new UnitSpawnAbility(UnitTypes.nova,10*60,0.0,0.0));
UnitTypes.nova.buildSpeed=10;
UnitTypes.nova.weapons.get(0).bullet.intervalBullet=UnitTypes.quasar.weapons.get(0).bullet.copy();
UnitTypes.nova.weapons.get(0).bullet.intervalRandomSpread=0;
UnitTypes.nova.weapons.get(0).bullet.bulletInterval=2;
UnitTypes.nova.weapons.get(0).bullet.intervalSpread=120;
UnitTypes.nova.weapons.get(0).bullet.intervalBullets=3;
UnitTypes.nova.weapons.get(0).bullet.speed=10.4;
UnitTypes.nova.range=305;
UnitTypes.nova.weapons.get(0).bullet.intervalBullet.damage=8;
UnitTypes.nova.health=850;
UnitTypes.nova.armor=7;

UnitTypes.bryde.weapons.get(0).shootStatus=StatusEffects.unmoving
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
