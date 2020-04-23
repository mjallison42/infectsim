
import 'entity.dart';

abstract class Policy {
  bool canGotoWork( Entity e );
  bool canGotoShops( Entity e );
  bool canGotoParks( Entity e );
  bool canGotoSocial( Entity e );
  bool canGotoCommunity( Entity e );
}

class DefaultPolicy extends Policy {
  @override
  bool canGotoWork( Entity e ) { return true; }
  @override
  bool canGotoShops( Entity e ) { return true; }
  @override
  bool canGotoParks( Entity e ) { return true; }
  @override
  bool canGotoSocial( Entity e ) { return true; }
  @override
  bool canGotoCommunity( Entity e ) { return true; }
}