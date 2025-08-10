import React, { useState, useEffect } from 'react';
import { Camera, Plus, AlertTriangle, Search, Archive, Package, Refrigerator, Scan } from 'lucide-react';

const FoodWasteApp = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [items, setItems] = useState([
    { 
      id: 1, 
      name: 'Greek Yogurt', 
      location: 'fridge', 
      expiryDate: '2025-08-12', 
      category: 'dairy', 
      price: 5.99,
      status: 'opened',
      openedDate: '2025-08-10',
      openedShelfLife: 7,
      daysUntilExpiry: 2
    },
    { 
      id: 2, 
      name: 'Chicken Breast', 
      location: 'fridge', 
      expiryDate: '2025-08-13', 
      category: 'meat', 
      price: 12.99,
      status: 'unopened',
      daysUntilExpiry: 3
    },
    { 
      id: 3, 
      name: 'Baby Spinach', 
      location: 'fridge', 
      expiryDate: '2025-08-13', 
      category: 'vegetables', 
      price: 3.49,
      status: 'unopened',
      daysUntilExpiry: 3
    }
  ]);

  const [showBarcodeModal, setShowBarcodeModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [foundProduct, setFoundProduct] = useState(null);
  const [newItem, setNewItem] = useState({
    name: '', location: 'fridge', expiryDate: '', category: 'dairy', price: ''
  });

  const simulateBarcodeSearch = async () => {
    setIsScanning(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mockProduct = {
      product_name: "Organic Whole Milk",
      brands: "Happy Farms"
    };
    
    setFoundProduct(mockProduct);
    setIsScanning(false);
    
    setNewItem({
      name: `${mockProduct.brands} ${mockProduct.product_name}`,
      category: 'dairy',
      location: 'fridge',
      expiryDate: '',
      price: ''
    });
  };

  const addItem = () => {
    if (newItem.name && newItem.expiryDate && newItem.price) {
      const item = {
        id: Date.now(),
        ...newItem,
        price: parseFloat(newItem.price),
        status: 'unopened',
        daysUntilExpiry: 10
      };
      
      setItems([...items, item]);
      setNewItem({ name: '', location: 'fridge', expiryDate: '', category: 'dairy', price: '' });
      setShowAddModal(false);
      setFoundProduct(null);
    }
  };

  const markAsOpened = (item) => {
    setItems(items.map(i => 
      i.id === item.id 
        ? { ...i, status: 'opened', openedDate: new Date().toISOString().split('T')[0] }
        : i
    ));
  };

  const markAsUsed = (item) => {
    setItems(items.filter(i => i.id !== item.id));
  };

  const markAsWasted = (item) => {
    setItems(items.filter(i => i.id !== item.id));
  };

  const getStatusColor = (days) => {
    if (days <= 1) return 'bg-red-50 border-red-200';
    if (days <= 3) return 'bg-orange-50 border-orange-200';
    return 'bg-green-50 border-green-200';
  };

  const SwipeableItemCard = ({ item, onUsed, onWasted, onMarkOpened }) => {
    const [currentX, setCurrentX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const handleTouchStart = (e) => {
      setIsDragging(true);
    };

    const handleTouchMove = (e) => {
      if (!isDragging) return;
      setCurrentX(e.touches[0].clientX - 200);
    };

    const handleTouchEnd = () => {
      if (Math.abs(currentX) > 100) {
        if (currentX > 0) {
          onUsed(item);
        } else {
          onWasted(item);
        }
      }
      setCurrentX(0);
      setIsDragging(false);
    };

    return (
      <div className="relative overflow-hidden rounded-xl">
        <div className="absolute inset-0 flex">
          <div className="flex-1 bg-green-500 flex items-center justify-start pl-4">
            <span className="text-white font-medium">✓ Used</span>
          </div>
          <div className="flex-1 bg-red-500 flex items-center justify-end pr-4">
            <span className="text-white font-medium">✗ Wasted</span>
          </div>
        </div>
        
        <div
          className={`relative bg-white p-4 border-2 ${getStatusColor(item.daysUntilExpiry)} transition-transform duration-200 cursor-pointer`}
          style={{ transform: `translateX(${currentX}px)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onClick={() => onUsed(item)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-2xl relative">
                {item.category === 'dairy' && '🥛'}
                {item.category === 'vegetables' && '🥬'}
                {item.category === 'meat' && '🥩'}
                
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full">
                  {item.status === 'opened' ? (
                    <div className="w-3 h-3 bg-orange-500 rounded-full" title="Opened"></div>
                  ) : (
                    <div className="w-3 h-3 bg-gray-400 rounded-full" title="Unopened"></div>
                  )}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">{item.name}</h4>
                <div className="text-sm text-gray-600">
                  {item.daysUntilExpiry}d left
                </div>
                <div className="text-xs text-gray-500">
                  {item.status === 'opened' ? 'Opened' : 'Unopened'}
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              {item.status === 'unopened' && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onMarkOpened(item);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-xs font-medium"
                >
                  Mark Opened
                </button>
              )}
              <div className="text-gray-400 text-xs text-center">
                Click to use
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const totalValue = items.reduce((sum, item) => sum + item.price, 0);
  const atRiskItems = items.filter(item => item.daysUntilExpiry <= 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto bg-white min-h-screen">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 pb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">FreshKeeper</h1>
              <p className="text-blue-100">Smart opened item tracking</p>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold">${totalValue.toFixed(0)}</div>
              <div className="text-blue-100 text-sm">total value</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white border-b border-gray-200 px-6">
          <div className="flex">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex-1 py-4 text-center font-medium border-b-2 transition-colors ${
                activeTab === 'dashboard'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500'
              }`}
            >
              💰 Dashboard
            </button>
            <button
              onClick={() => setActiveTab('inventory')}
              className={`flex-1 py-4 text-center font-medium border-b-2 transition-colors ${
                activeTab === 'inventory'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500'
              }`}
            >
              📦 Kitchen ({items.length})
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {activeTab === 'dashboard' ? (
            <div className="space-y-6">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
                  <div className="text-blue-600 text-sm font-medium mb-1">Inventory</div>
                  <div className="text-2xl font-bold text-blue-900">${totalValue.toFixed(2)}</div>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4">
                  <div className="text-orange-600 text-sm font-medium mb-1">At Risk</div>
                  <div className="text-2xl font-bold text-orange-900">{atRiskItems.length}</div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-2xl p-4">
                  <div className="text-green-600 text-sm font-medium mb-1">Saved</div>
                  <div className="text-2xl font-bold text-green-900">$47</div>
                </div>
              </div>

              {/* At Risk Alert */}
              {atRiskItems.length > 0 && (
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Expiring Soon</div>
                      <div className="text-gray-600 text-sm">
                        {atRiskItems.length} items need attention
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Use These Now */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Use These Now</h3>
                <div className="space-y-4">
                  {atRiskItems.slice(0, 3).map(item => (
                    <SwipeableItemCard 
                      key={item.id} 
                      item={item} 
                      onUsed={markAsUsed} 
                      onWasted={markAsWasted}
                      onMarkOpened={markAsOpened}
                    />
                  ))}
                </div>
              </div>

              {/* Quick Add */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Add</h3>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setShowBarcodeModal(true)}
                    className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-xl flex items-center justify-center gap-2"
                  >
                    <Scan className="w-5 h-5" />
                    <span className="font-medium">Scan Item</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('inventory')}
                    className="bg-blue-100 hover:bg-blue-200 text-blue-900 p-4 rounded-xl flex items-center justify-center gap-2"
                  >
                    <Package className="w-5 h-5" />
                    <span className="font-medium">View Kitchen</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            // Kitchen Tab
            <div className="space-y-6">
              {/* Add Items - At top of Kitchen tab */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Add Food</h3>
                <div className="grid grid-cols-3 gap-3">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl flex flex-col items-center justify-center gap-1">
                    <Camera className="w-4 h-4" />
                    <span className="text-xs font-medium">Receipt</span>
                  </button>
                  <button
                    onClick={() => setShowBarcodeModal(true)}
                    className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-xl flex flex-col items-center justify-center gap-1"
                  >
                    <Scan className="w-4 h-4" />
                    <span className="text-xs font-medium">Barcode</span>
                  </button>
                  <button
                    onClick={() => setShowAddModal(true)}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-900 p-3 rounded-xl flex flex-col items-center justify-center gap-1"
                  >
                    <Plus className="w-4 h-4" />
                    <span className="text-xs font-medium">Manual</span>
                  </button>
                </div>
              </div>

              {/* Fridge Section */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Refrigerator className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Fridge</h3>
                      <p className="text-sm text-gray-500">{items.filter(i => i.location === 'fridge').length} items</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 space-y-3">
                  {items.filter(item => item.location === 'fridge').map(item => (
                    <SwipeableItemCard 
                      key={item.id} 
                      item={item} 
                      onUsed={markAsUsed} 
                      onWasted={markAsWasted}
                      onMarkOpened={markAsOpened}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Barcode Scanner Modal */}
        {showBarcodeModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-6 w-full max-w-sm">
              <h3 className="text-xl font-bold mb-6">Scan Product Barcode</h3>
              
              {!isScanning && !foundProduct && (
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-gray-100 rounded-2xl flex items-center justify-center">
                    <Scan className="w-12 h-12 text-gray-400" />
                  </div>
                  <p className="text-gray-600">
                    Point your camera at a product barcode to automatically populate product information.
                  </p>
                  <button
                    onClick={simulateBarcodeSearch}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-medium"
                  >
                    Start Scanning
                  </button>
                  <div className="text-sm text-gray-500">
                    Demo Mode: Will find "Organic Whole Milk"
                  </div>
                </div>
              )}
              
              {isScanning && (
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-green-100 rounded-2xl flex items-center justify-center">
                    <div className="w-8 h-8 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                  <p className="text-gray-600">Scanning for product...</p>
                </div>
              )}
              
              {foundProduct && (
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-green-100 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">✅</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{foundProduct.product_name}</h4>
                    <p className="text-gray-600 text-sm">{foundProduct.brands}</p>
                  </div>
                  <button
                    onClick={() => {
                      setShowBarcodeModal(false);
                      setShowAddModal(true);
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium"
                  >
                    Continue to Add Item
                  </button>
                </div>
              )}
              
              <button
                onClick={() => {
                  setShowBarcodeModal(false);
                  setIsScanning(false);
                  setFoundProduct(null);
                }}
                className="w-full mt-4 px-4 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Add Item Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-6 w-full max-w-sm">
              <h3 className="text-xl font-bold mb-6">
                {foundProduct ? 'Complete Product Details' : 'Add New Item'}
              </h3>
              
              {foundProduct && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-xl">
                  <div className="text-sm text-green-800">
                    ✅ Product info from barcode: <strong>{foundProduct.product_name}</strong>
                  </div>
                </div>
              )}
              
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Item name"
                  value={newItem.name}
                  onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="number"
                  step="0.01"
                  placeholder="Price ($)"
                  value={newItem.price}
                  onChange={(e) => setNewItem({...newItem, price: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="date"
                  value={newItem.expiryDate}
                  onChange={(e) => setNewItem({...newItem, expiryDate: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => {
                    setShowAddModal(false);
                    setFoundProduct(null);
                  }}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={addItem}
                  className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-medium"
                >
                  Add Item
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodWasteApp;
