<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FreshKeeper - Smart Food Waste Prevention</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50">
    <div class="max-w-md mx-auto bg-white min-h-screen">
        <!-- Header -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 pb-8">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-2xl font-bold">FreshKeeper</h1>
                    <p class="text-blue-100">Smart opened item tracking</p>
                </div>
                <div class="text-right">
                    <div class="text-lg font-bold">$27</div>
                    <div class="text-blue-100 text-sm">total value</div>
                </div>
            </div>
        </div>

        <!-- Tabs -->
        <div class="bg-white border-b border-gray-200 px-6">
            <div class="flex">
                <button id="dashboard-tab" class="flex-1 py-4 text-center font-medium border-b-2 border-blue-500 text-blue-600">
                    💰 Dashboard
                </button>
                <button id="kitchen-tab" class="flex-1 py-4 text-center font-medium border-b-2 border-transparent text-gray-500">
                    📦 Kitchen (4)
                </button>
            </div>
        </div>

        <!-- Dashboard Content -->
        <div id="dashboard-content" class="p-6">
            <!-- Stats -->
            <div class="grid grid-cols-3 gap-4 mb-6">
                <div class="bg-blue-50 border border-blue-200 rounded-2xl p-4">
                    <div class="text-blue-600 text-sm font-medium mb-1">Inventory</div>
                    <div class="text-2xl font-bold text-blue-900">$27.47</div>
                    <div class="text-blue-700 text-xs">Current value</div>
                </div>
                <div class="bg-red-50 border border-red-200 rounded-2xl p-4">
                    <div class="text-red-600 text-sm font-medium mb-1">Wasted</div>
                    <div class="text-2xl font-bold text-red-900">$14.47</div>
                    <div class="text-red-700 text-xs">This month</div>
                </div>
                <div class="bg-orange-50 border border-orange-200 rounded-2xl p-4">
                    <div class="text-orange-600 text-sm font-medium mb-1">At Risk</div>
                    <div class="text-2xl font-bold text-orange-900">$8.20</div>
                    <div class="text-orange-700 text-xs">About to expire</div>
                </div>
            </div>

            <!-- At Risk Alert -->
            <div class="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-4 mb-6">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        ⚠️
                    </div>
                    <div>
                        <div class="font-semibold text-gray-900">Expiring Soon</div>
                        <div class="text-gray-600 text-sm">3 items need attention</div>
                    </div>
                </div>
            </div>

            <!-- Use These Now -->
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">Use These Now</h3>
                <div class="space-y-3">
                    <!-- Greek Yogurt -->
                    <div class="relative bg-white p-3 border-2 border-orange-200 bg-orange-50 rounded-xl">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-3 flex-1">
                                <div class="text-xl relative">
                                    🥛
                                    <div class="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full"></div>
                                </div>
                                <div class="flex-1">
                                    <h4 class="font-medium text-gray-900 text-sm">Greek Yogurt</h4>
                                    <div class="text-xs text-gray-600">2d left • $5.99</div>
                                </div>
                            </div>
                            <div class="flex gap-1">
                                <button class="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">Used</button>
                                <button class="bg-gray-500 text-white px-2 py-1 rounded text-xs font-medium">Edit</button>
                            </div>
                        </div>
                        <div class="mt-2 p-1 bg-orange-50 rounded text-xs text-orange-800">
                            ⚠️ Opened items expire faster!
                        </div>
                    </div>

                    <!-- Chicken Breast -->
                    <div class="relative bg-white p-3 border-2 border-orange-200 bg-orange-50 rounded-xl">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-3 flex-1">
                                <div class="text-xl relative">
                                    🥩
                                    <div class="absolute -top-1 -right-1 w-2 h-2 bg-gray-400 rounded-full"></div>
                                </div>
                                <div class="flex-1">
                                    <h4 class="font-medium text-gray-900 text-sm">Chicken Breast</h4>
                                    <div class="text-xs text-gray-600">3d left • $12.99</div>
                                </div>
                            </div>
                            <div class="flex gap-1">
                                <button class="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">Used</button>
                                <button class="bg-gray-500 text-white px-2 py-1 rounded text-xs font-medium">Edit</button>
                            </div>
                        </div>
                    </div>

                    <!-- Baby Spinach -->
                    <div class="relative bg-white p-3 border-2 border-orange-200 bg-orange-50 rounded-xl">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-3 flex-1">
                                <div class="text-xl relative">
                                    🥬
                                    <div class="absolute -top-1 -right-1 w-2 h-2 bg-gray-400 rounded-full"></div>
                                </div>
                                <div class="flex-1">
                                    <h4 class="font-medium text-gray-900 text-sm">Baby Spinach</h4>
                                    <div class="text-xs text-gray-600">3d left • $3.49</div>
                                </div>
                            </div>
                            <div class="flex gap-1">
                                <button class="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">Used</button>
                                <button class="bg-gray-500 text-white px-2 py-1 rounded text-xs font-medium">Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Quick Add -->
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">Quick Add</h3>
                <div class="grid grid-cols-2 gap-3">
                    <button class="bg-green-600 hover:bg-green-700 text-white p-4 rounded-xl flex items-center justify-center gap-2">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M12 12h.01m4.01 0h.01M12 12h4.01"/>
                        </svg>
                        <span class="font-medium">Scan Item</span>
                    </button>
                    <button id="view-kitchen-btn" class="bg-blue-100 hover:bg-blue-200 text-blue-900 p-4 rounded-xl flex items-center justify-center gap-2">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10"/>
                        </svg>
                        <span class="font-medium">View Kitchen</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- Kitchen Content (Hidden initially) -->
        <div id="kitchen-content" class="p-6 hidden">
            <!-- Add Items -->
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-3">Add Food</h3>
                <div class="grid grid-cols-3 gap-3">
                    <button class="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl flex flex-col items-center justify-center gap-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        <span class="text-xs font-medium">Receipt</span>
                    </button>
                    <button class="bg-green-600 hover:bg-green-700 text-white p-3 rounded-xl flex flex-col items-center justify-center gap-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M12 12h.01m4.01 0h.01M12 12h4.01"/>
                        </svg>
                        <span class="text-xs font-medium">Barcode</span>
                    </button>
                    <button class="bg-gray-100 hover:bg-gray-200 text-gray-900 p-3 rounded-xl flex flex-col items-center justify-center gap-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                        </svg>
                        <span class="text-xs font-medium">Manual</span>
                    </button>
                </div>
            </div>

            <!-- Fridge Section -->
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
                <div class="p-6 border-b border-gray-100">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            🗄️
                        </div>
                        <div>
                            <h3 class="font-semibold text-gray-900">Fridge</h3>
                            <p class="text-sm text-gray-500">3 items</p>
                        </div>
                    </div>
                </div>
                
                <div class="p-6 space-y-3">
                    <!-- All the fridge items with their buttons -->
                    <div class="relative bg-white p-3 border-2 border-orange-200 bg-orange-50 rounded-xl">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-3 flex-1">
                                <div class="text-xl relative">
                                    🥛
                                    <div class="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full"></div>
                                </div>
                                <div class="flex-1">
                                    <h4 class="font-medium text-gray-900 text-sm">Greek Yogurt</h4>
                                    <div class="text-xs text-gray-600">2d left • $5.99</div>
                                </div>
                            </div>
                            <div class="flex gap-1">
                                <button class="bg-green-600 text-white px-2 py-1 rounded text-xs">Used</button>
                                <button class="bg-gray-500 text-white px-2 py-1 rounded text-xs">Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Pantry Section -->
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div class="p-6 border-b border-gray-100">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            📦
                        </div>
                        <div>
                            <h3 class="font-semibold text-gray-900">Pantry</h3>
                            <p class="text-sm text-gray-500">1 item</p>
                        </div>
                    </div>
                </div>
                
                <div class="p-6">
                    <div class="relative bg-white p-3 border-2 border-green-200 bg-green-50 rounded-xl">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-3 flex-1">
                                <div class="text-xl relative">
                                    🍯
                                    <div class="absolute -top-1 -right-1 w-2 h-2 bg-gray-400 rounded-full"></div>
                                </div>
                                <div class="flex-1">
                                    <h4 class="font-medium text-gray-900 text-sm">Pasta Sauce (Jar)</h4>
                                    <div class="text-xs text-gray-600">300d left • $3.99</div>
                                </div>
                            </div>
                            <div class="flex gap-1">
                                <button class="bg-blue-600 text-white px-2 py-1 rounded text-xs">Open</button>
                                <button class="bg-gray-500 text-white px-2 py-1 rounded text-xs">Edit</button>
                            </div>
                        </div>
                        <div class="mt-2 p-1 bg-blue-50 rounded text-xs text-blue-800">
                            ⚠️ Expiry date will change once opened
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Simple tab switching
        document.getElementById('dashboard-tab').addEventListener('click', function() {
            // Switch to dashboard
            document.getElementById('dashboard-content').classList.remove('hidden');
            document.getElementById('kitchen-content').classList.add('hidden');
            
            // Update tab styles
            document.getElementById('dashboard-tab').className = 'flex-1 py-4 text-center font-medium border-b-2 border-blue-500 text-blue-600';
            document.getElementById('kitchen-tab').className = 'flex-1 py-4 text-center font-medium border-b-2 border-transparent text-gray-500';
        });

        document.getElementById('kitchen-tab').addEventListener('click', function() {
            // Switch to kitchen
            document.getElementById('dashboard-content').classList.add('hidden');
            document.getElementById('kitchen-content').classList.remove('hidden');
            
            // Update tab styles
            document.getElementById('kitchen-tab').className = 'flex-1 py-4 text-center font-medium border-b-2 border-blue-500 text-blue-600';
            document.getElementById('dashboard-tab').className = 'flex-1 py-4 text-center font-medium border-b-2 border-transparent text-gray-500';
        });

        document.getElementById('view-kitchen-btn').addEventListener('click', function() {
            document.getElementById('kitchen-tab').click();
        });
    </script>
</body>
</html>
