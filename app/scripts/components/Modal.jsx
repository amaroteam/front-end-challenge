import React from 'react';
import ReactDOM from 'react-dom';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: `modal-${Math.random()}`
    };

    this.onClickClose = this.onClickClose.bind(this);
  }

  static propTypes = {
    animation: React.PropTypes.bool,
    backdrop: React.PropTypes.bool,
    blurify: React.PropTypes.bool,
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    keyboard: React.PropTypes.bool,
    onHide: React.PropTypes.func,
    onShow: React.PropTypes.func,
    show: React.PropTypes.bool,
    showFooter: React.PropTypes.bool,
    style: React.PropTypes.object,
    title: React.PropTypes.string
  };

  static defaultProps = {
    animation: true,
    backdrop: true,
    blurify: true,
    keyboard: true,
    show: false,
    showFooter: false
  };

  componentDidMount() {
    let el = this.state.id && document.getElementById(this.state.id);

    if (!el) {
      el = document.createElement('div');
      el.id = this.state.id;
      document.body.appendChild(el);
    }

    this.foreignElement = el;
    this.initModal();
  }

  componentDidUpdate(prevProps) {
    this.renderModal();

    if (prevProps.show !== this.props.show) {
      this.toggleModal();
    }
  }

  componentWillUnmount() {
    this.$modal.modal('hide');
    const modal = document.getElementById(this.state.id);
    modal.parentNode.removeChild(modal);
  }

  onClickClose(e) {
    e.preventDefault();

    this.$modal.modal('hide');
  }

  toggleModal() {
    if (this.props.show) {
      this.$modal.modal('show');
    }
    else {
      this.$modal.modal('hide');
    }
  }

  initModal() {
    const props = this.props;

    this.renderModal();
    let scrollable;
    this.$modal = $(this.foreignElement).find('.modal');

    this.$modal.modal({
      backdrop: props.backdrop,
      show: props.show
    });

    this.$modal.on('show.bs.modal', () => {
      if (props.blurify) {
        $('body').addClass('blurify');
      }
    });

    this.$modal.on('shown.bs.modal', () => {
      const $modalBody = this.$modal.find('.modal-body');
      const $modalBodyWrapper = this.$modal.find('.modal-body__wrapper');

      if (typeof props.onShow === 'function') {
        props.onShow();
      }

      if ($modalBodyWrapper.find('> div').outerHeight() > $modalBodyWrapper.outerHeight()) {
        $modalBody.addClass('scrollable');
        scrollable = true;
      }
    });

    this.$modal.on('hidden.bs.modal', () => {
      if (typeof props.onHide === 'function') {
        props.onHide();
      }

      $('body').removeClass('blurify');
    });

    this.$modal.find('.modal-body__wrapper').on('scroll', (e) => {
      const $el = $(e.currentTarget);
      const scrollTop = $el.scrollTop() + $el.outerHeight();
      const innerHeight = $el.find('> div').height();
      const threshold = innerHeight - scrollTop;

      if (innerHeight > $el.height()) {
        if (threshold < 250 && scrollable) {
          scrollable = false;
          $el.parent().removeClass('scrollable');
        }
        else if (threshold > 250 && !scrollable) {
          scrollable = true;
          $el.parent().addClass('scrollable');
        }
      }
    });
  }

  renderModal() {
    const props = this.props;
    const opts = {
      modalClassName: ['modal']
    };

    if (props.animation) {
      opts.modalClassName = opts.modalClassName.concat('fade');
    }

    if (props.show) {
      opts.modalClassName = opts.modalClassName.concat('in');
    }

    if (props.className) {
      opts.modalClassName = opts.modalClassName.concat(props.className);
    }

    if (props.title) {
      opts.header = (
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 className="modal-title">{props.title}</h4>
        </div>
      );
    }

    if (props.showFooter) {
      opts.footer = (
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      );
    }

    ReactDOM.render(
      <div className={opts.modalClassName.join(' ')} tabIndex="-1" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content" role="document" style={props.style}>
            <a href="#close" className="modal-close" onClick={this.onClickClose}><i className="i-close" /></a>
            {opts.header}
            <div className="modal-body">{this.props.children}</div>
            {opts.footer}
          </div>
        </div>
      </div>, this.foreignElement);
  }

  render() {
    return false;
  }
}

export default Modal;
