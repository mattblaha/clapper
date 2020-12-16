const { GObject, Gtk } = imports.gi;
const Misc = imports.clapper_src.misc;
const { PlayerRemote } = imports.clapper_src.playerRemote;

var WidgetRemote = GObject.registerClass(
class ClapperWidgetRemote extends Gtk.Grid
{
    _init(opts)
    {
        super._init();

        Misc.loadCustomCss();

        this.player = new PlayerRemote();
        this.player.webclient.passMsgData = this.receiveWs.bind(this);
    }

    receiveWs(action, value)
    {
        switch(action) {
            case 'close':
                let root = this.get_root();
                root.run_dispose();
                break;
            default:
                break;
        }
    }
});