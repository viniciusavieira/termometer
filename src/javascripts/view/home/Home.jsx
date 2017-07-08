import React from 'react';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';
import App from 'javascripts/App';
import 'stylesheets/view/home.scss';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			globlals:{
				generalCssSize: 300,
				moveCssPadding: 5,
				discountCssWidth: 75,
				borderThickness: 2,
				totalPrice: 500,
				bagValue: 150
			},
			styleDiscount: {
        marginLeft: 0
      },
			styleOverflow: {
				width: 0
			}
		};
	}

	componentDidMount() {
		// 90% do que passou no general - padding no container border 5px de cada lado - largura da borda 2px pra cada lado
		let totalSize = (this.state.globlals.generalCssSize *0.9) - (this.state.globlals.moveCssPadding * 2) - (this.state.globlals.borderThickness * 2);
		let discountPercSize = ((this.state.globlals.discountCssWidth * 100) / totalSize) /2; //Alinhando pelo centro
		this.setState(() => {
			let overflowPercSize = (this.state.globlals.bagValue * 100) / this.state.globlals.totalPrice;
			overflowPercSize = (overflowPercSize >= 100) ? 100 : overflowPercSize;
			if (String(this.state.styleOverflow.width).indexOf('%') !== -1) {
				overflowPercSize = String(this.state.styleOverflow.width).substring(0, this.state.styleOverflow.width.length-1);
			}
			let textPositionReducedSize =  String(overflowPercSize - discountPercSize) + '%';
			let barSize = String(overflowPercSize) + '%';
			return {
				styleDiscount: {marginLeft: textPositionReducedSize},
				styleOverflow: {width: barSize},
			};
		});
	}


	render() {
		return (
			<div className="container-general" ref="general">
				<div className="container-termometer">
					<div className="inner-container">
						<div className="container-values">
							<div className="values">
								<p>R$ 0,00</p>
								<div className="line first"></div>
						</div>
							<div className="values tac">
								<p>R$ {this.state.globlals.totalPrice/2},00</p>
								<div className="line center"></div>
							</div>
							<div className="values">
								<div className="final-value">
									<p>R$ {this.state.globlals.totalPrice},00</p>
									<div className="line last"></div>
								</div>
							</div>
						</div>
						<div className="container-border">
							<div className="container-move" ref="move">
								<div className="discount" style={this.state.styleDiscount}>
									<p>R$ {this.state.globlals.bagValue},00</p>
									<div className="line"></div>
								</div>
								<div className="overflow-mask" style={this.state.styleOverflow}>
									<div className="termometer-bg"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
    );
  }
}
export default Home
