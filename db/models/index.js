'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const Address = require("./address")
const Payment = require("./payment")
const Order = require("./order")
const Order_Item = require("./order_item")
const Review = require("./review")
const Product = require("./product")
const Category = require("./category")
const Media = require("./media")

Payment.belongsTo(User,  {
		allowNull: false
	});
User.hasMany(Payment, {onDelete: 'cascade'}); // for eager loading, also added cascade
Payment.belongsTo(Address, {
		as: "billingAddress",
		allowNull: false
	}
);
Address.belongsTo(User);
User.hasMany(Address, { onDelete: 'cascade' }); // for eager loading, also added cascade delete
Review.belongsTo(User,  {
		allowNull: false
	});
User.hasMany(Review); // for eager loading
Order.belongsTo(User,  {
		allowNull: false
	});
User.hasMany(Order); // for eager loading
Order.belongsTo(Address,  {
		allowNull: false
	});
Order.belongsTo(Payment,  {
		allowNull: false
	});
Order_Item.belongsTo(Order,  {
		allowNull: false
	});
Order.hasMany(Order_Item,  {
		allowNull: false, onDelete: 'cascade'
	}); // for eager loading, also added cascade
Order_Item.belongsTo(Product,  {
		allowNull: false
	});
Review.belongsTo(Product,  {
		allowNull: false
	});
Product.hasMany(Review, { onDelete: 'cascade' }); // for eager loading, also added cascade ); // for eager loading
Category.belongsToMany(Product, {through: "CategoryProduct"});
Category.belongsTo(Category, {as: "metaCategory"});
Category.hasMany(Category, {as: "metaCategory"});
Media.belongsToMany(Product, {
		through: "MediaProduct",
		allowNull: false
	});
Product.hasMany(Media, { onDelete: 'cascade' }); // for eager loading, also added cascade );


module.exports = {User, Address, Payment, Order, Order_Item, Review, Product, Category, Media}

