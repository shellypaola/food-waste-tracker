<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FreshKeeper - Smart Food Management</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background-color: #f9fafb;
            color: #111827;
            line-height: 1.5;
        }

        .container {
            max-width: 448px;
            margin: 0 auto;
            background: white;
            min-height: 100vh;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        /* Header */
        .header {
            background: linear-gradient(135deg, #10b981, #0d9488);
            color: white;
            padding: 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .header-left h1 {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 2px;
        }

        .header-left p {
            color: rgba(255, 255, 255, 0.8);
            font-size: 14px;
        }

        .header-right {
            text-align: right;
        }

        .header-right .amount {
            font-size: 18px;
            font-weight: 700;
        }

        .header-right .label {
            color: rgba(255, 255, 255, 0.8);
            font-size: 12px;
        }

        /* Tabs */
        .tabs {
            background: white;
            border-bottom: 1px solid #e5e7eb;
            display: flex;
        }

        .tab {
            flex: 1;
            padding: 12px 16px;
            text-align: center;
            font-size: 14px;
            font-weight: 500;
            border-bottom: 2px solid transparent;
            cursor: pointer;
            transition: all 0.2s;
            background: none;
            border-left: none;
            border-right: none;
            border-top: none;
            color: #6b7280;
        }

        .tab.active {
            border-bottom-color: #10b981;
            color: #10b981;
        }

        .tab:hover:not(.active) {
            color: #374151;
        }

        /* Content */
        .content {
            padding: 16px;
        }

        /* KPI Grid */
        .kpi-grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 12px;
            margin-bottom: 24px;
        }

        .kpi-card {
            border-radius: 12px;
            padding: 12px;
            border: 1px solid;
        }

        .kpi-inventory {
            background-color: #ecfdf5;
            border-color: #bbf7d0;
        }

        .kpi-wasted {
            background-color: #fef2f2;
            border-color: #fecaca;
        }

        .kpi-at-risk {
            background-color: #fffbeb;
            border-color: #fed7aa;
        }

        .kpi-label {
            font-size: 12px;
            font-weight: 500;
            margin-bottom: 4px;
        }

        .kpi-inventory .kpi-label { color: #059669; }
        .kpi-wasted .kpi-label { color: #dc2626; }
        .kpi-at-risk .kpi-label { color: #d97706; }

        .kpi-value {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 4px;
        }

        .kpi-inventory .kpi-value { color: #064e3b; }
        .kpi-wasted .kpi-value { color: #7f1d1d; }
        .kpi-at-risk .kpi-value { color: #92400e; }

        .kpi-description {
            font-size: 12px;
        }

        .kpi-inventory .kpi-description { color: #047857; }
        .kpi-wasted .kpi-description { color: #b91c1c; }
        .kpi-at-risk .kpi-description { color: #b45309; }

        /* Cards */
        .card {
            background: white;
            border-radius: 12px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            border: 1px solid #f3f4f6;
            margin-bottom: 16px;
            overflow: hidden;
        }

        .card-header {
            padding: 16px;
            border-bottom: 1px solid #f3f4f6;
        }

        .card-header h3 {
            font-weight: 600;
            color: #111827;
            margin-bottom: 4px;
            font-size: 16px;
        }

        .card-header p {
            font-size: 14px;
            color: #6b7280;
        }

        .card-content {
            padding: 16px;
        }

        /* Add Food Grid */
        .add-food-grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 8px;
        }

        .add-btn {
            padding: 12px 8px;
            border-radius: 8px;
            color: white;
            border: none;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
            transition: all 0.2s;
            font-size: 12px;
            font-weight: 500;
        }

        .add-btn svg {
            width: 16px;
            height: 16px;
            stroke: currentColor;
            fill: none;
            stroke-width: 2;
        }

        .add-btn-receipt { background-color: #3b82f6; }
        .add-btn-receipt:hover { background-color: #2563eb; }
        .add-btn-barcode { background-color: #10b981; }
        .add-btn-barcode:hover { background-color: #059669; }
        .add-btn-manual { background-color: #6b7280; }
        .add-btn-manual:hover { background-color: #4b5563; }

        /* Items */
        .food-item {
            background: #f9fafb;
            border: 2px solid #d1d5db;
            border-radius: 12px;
            padding: 12px;
            margin-bottom: 12px;
            transition: all 0.2s;
        }

        .food-item.at-risk {
            border-color: #fbbf24;
            background-color: #fffbeb;
        }

        .food-item.urgent {
            border-color: #f87171;
            background-color: #fef2f2;
        }

        .food-item-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 8px;
        }

        .food-item-left {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 1;
            min-width: 0;
            justify-content: space-between;
        }

        .food-emoji {
            font-size: 20px;
            flex-shrink: 0;
        }

        .food-info {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 1;
            min-width: 0;
        }

        .food-details {
            flex: 1;
            min-width: 0;
        }

        .food-name {
            font-weight: 500;
            color: #111827;
            font-size: 14px;
            margin: 0;
            padding: 0;
            line-height: 1.2;
            display: block;
        }

        .food-meta {
            font-size: 12px;
            color: #6b7280;
            margin: 0;
            padding: 0;
            line-height: 1.2;
            text-align: right;
            flex-shrink: 0;
        }

        .food-actions {
            display: flex;
            gap: 4px;
            flex-shrink: 0;
        }

        .action-btn {
            padding: 6px 12px;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 500;
            border: none;
            cursor: pointer;
            transition: all 0.2s;
            color: white;
        }

        .btn-used { background-color: #10b981; }
        .btn-used:hover { background-color: #059669; }
        .btn-wasted { background-color: #ef4444; }
        .btn-wasted:hover { background-color: #dc2626; }
        .btn-open { background-color: #3b82f6; }
        .btn-open:hover { background-color: #2563eb; }
        .btn-edit { background-color: #6b7280; }
        .btn-edit:hover { background-color: #4b5563; }

        .food-note {
            margin-top: 8px;
            padding: 8px;
            background-color: #dbeafe;
            border-radius: 6px;
            font-size: 12px;
            color: #1e40af;
        }

        /* Empty States */
        .empty-state {
            text-align: center;
            color: #6b7280;
            padding: 24px;
        }

        .empty-state-icon {
            font-size: 32px;
            margin-bottom: 8px;
        }

        .empty-state p {
            font-size: 14px;
        }

        /* Modals */
        .modal {
            position: fixed;
            inset: 0;
            background-color: rgba(0, 0, 0, 0.5);
            display: none;
            align-items: center;
            justify-content: center;
            padding: 16px;
            z-index: 50;
        }

        .modal.show {
            display: flex !important;
        }

        .modal-content {
            background: white;
            border-radius: 12px;
            padding: 24px;
            width: 100%;
            max-width: 384px;
        }

        .modal-title {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 16px;
        }

        .form-group {
            margin-bottom: 16px;
        }

        .form-label {
            display: block;
            font-size: 14px;
            font-weight: 500;
            color: #374151;
            margin-bottom: 4px;
        }

        .form-input {
            width: 100%;
            padding: 8px 12px;
            border: 1px solid #d1d5db;
            border-radius: 8px;
            font-size: 14px;
        }

        .form-input:focus {
            outline: none;
            border-color: #10b981;
            box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
        }

        .form-input.error {
            border-color: #ef4444;
            background-color: #fef2f2;
        }

        .form-input.error:focus {
            border-color: #ef4444;
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
        }

        .error-message {
            background-color: #fef2f2;
            border: 1px solid #fecaca;
            color: #dc2626;
            padding: 12px;
            border-radius: 8px;
            margin-bottom: 16px;
            font-size: 14px;
            display: none;
        }

        .modal-actions {
            display: flex;
            gap: 12px;
            margin-top: 24px;
        }

        .btn-secondary {
            flex: 1;
            padding: 8px 16px;
            color: #374151;
            background-color: #f3f4f6;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s;
        }

        .btn-secondary:hover {
            background-color: #e5e7eb;
        }

        .btn-primary {
            flex: 1;
            padding: 8px 16px;
            background-color: #10b981;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s;
        }

        .btn-primary:hover {
            background-color: #059669;
        }

        .hidden {
            display: none !important;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <div class="header-left">
                <h1>FreshKeeper</h1>
                <p>Smart food management</p>
            </div>
            <div class="header-right">
                <div class="amount" id="total-value">$0.00</div>
                <div class="label">total value</div>
            </div>
        </div>

        <!-- Navigation Tabs -->
        <div class="tabs">
            <button id="dashboard-tab" class="tab active" onclick="showDashboard()">Dashboard</button>
            <button id="kitchen-tab" class="tab" onclick="showKitchen()">Kitchen (<span id="kitchen-count">0</span>)</button>
        </div>

        <!-- Dashboard Content -->
        <div id="dashboard-content" class="content">
            <!-- KPI Cards -->
            <div class="kpi-grid">
                <div class="kpi-card kpi-inventory">
                    <div class="kpi-label">Inventory</div>
                    <div class="kpi-value" id="inventory-kpi">$0.00</div>
                    <div class="kpi-description">Current value</div>
                </div>
                <div class="kpi-card kpi-wasted">
                    <div class="kpi-label">Wasted</div>
                    <div class="kpi-value" id="wasted-kpi">$0.00</div>
                    <div class="kpi-description">This month</div>
                </div>
                <div class="kpi-card kpi-at-risk">
                    <div class="kpi-label">At Risk</div>
                    <div class="kpi-value" id="at-risk-kpi">$0.00</div>
                    <div class="kpi-description">Expires ≤3 days</div>
                </div>
            </div>

            <!-- At Risk Items -->
            <div class="card">
                <div class="card-header">
                    <h3>Items At Risk</h3>
                    <p>Expires in 3 days or less</p>
                </div>
                <div class="card-content" id="at-risk-items">
                    <div class="empty-state">
                        <div class="empty-state-icon">✅</div>
                        <p>No items at risk!</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Kitchen Content -->
        <div id="kitchen-content" class="content hidden">
            <!-- Add Food Options -->
            <div class="card">
                <div class="card-header">
                    <h3>Add Food</h3>
                </div>
                <div class="card-content">
                    <div class="add-food-grid">
                        <button onclick="addDemoItems()" class="add-btn add-btn-receipt">
                            <svg viewBox="0 0 24 24">
                                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                            </svg>
                            Receipt
                        </button>
                        <button onclick="alert('Barcode feature coming soon!')" class="add-btn add-btn-barcode">
                            <svg viewBox="0 0 24 24">
                                <path d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M12 12h.01m4.01 0h.01M12 12h4.01"/>
                            </svg>
                            Barcode
                        </button>
                        <button onclick="openManualModal()" class="add-btn add-btn-manual">
                            <svg viewBox="0 0 24 24">
                                <path d="M12 4v16m8-8H4"/>
                            </svg>
                            Manual
                        </button>
                    </div>
                </div>
            </div>

            <!-- Fridge Section -->
            <div class="card">
                <div class="card-header">
                    <h3>🧊 Fridge</h3>
                    <p><span id="fridge-count">0</span> items</p>
                </div>
                <div class="card-content" id="fridge-items">
                    <div class="empty-state">
                        <p>No items in fridge</p>
                    </div>
                </div>
            </div>

            <!-- Pantry Section -->
            <div class="card">
                <div class="card-header">
                    <h3>📦 Pantry</h3>
                    <p><span id="pantry-count">0</span> items</p>
                </div>
                <div class="card-content" id="pantry-items">
                    <div class="empty-state">
                        <p>No items in pantry</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Manual Add Modal -->
    <div id="manual-modal" class="modal">
        <div class="modal-content">
            <h3 class="modal-title">Add Item Manually</h3>
            <div id="error-message" class="error-message">
                Please fill in all required fields marked with *
            </div>
            <div class="form-group">
                <label class="form-label">Item Name *</label>
                <input type="text" id="item-name" class="form-input" placeholder="e.g., Greek Yogurt" required>
            </div>
            <div class="form-group">
                <label class="form-label">Cost ($) *</label>
                <input type="number" id="item-cost" step="0.01" min="0" class="form-input" placeholder="0.00" required>
            </div>
            <div class="form-group">
                <label class="form-label">Expiry Date *</label>
                <input type="date" id="item-expiry" class="form-input" required>
            </div>
            <div class="form-group">
                <label class="form-label">Location *</label>
                <select id="item-location" class="form-input" required>
                    <option value="">Select location</option>
                    <option value="fridge">Fridge</option>
                    <option value="pantry">Pantry</option>
                </select>
            </div>
            <div class="modal-actions">
                <button type="button" class="btn-secondary" onclick="closeManualModal()">Cancel</button>
                <button type="button" class="btn-primary" onclick="window.addManualItem()">Add Item</button>
            </div>
        </div>
    </div>

    <script>
        // Make sure all functions are globally accessible
        window.addManualItem = function() {
            // Clear previous errors
            clearValidationErrors();
            
            const name = document.getElementById('item-name').value.trim();
            const cost = parseFloat(document.getElementById('item-cost').value);
            const expiry = document.getElementById('item-expiry').value;
            const location = document.getElementById('item-location').value;

            let hasErrors = false;

            // Validate each field and mark errors
            if (!name) {
                markFieldError('item-name');
                hasErrors = true;
            }
            if (!cost || cost <= 0) {
                markFieldError('item-cost');
                hasErrors = true;
            }
            if (!expiry) {
                markFieldError('item-expiry');
                hasErrors = true;
            }
            if (!location) {
                markFieldError('item-location');
                hasErrors = true;
            }

            // Show error message if there are any errors
            if (hasErrors) {
                showErrorMessage();
                return;
            }

            // All validation passed - add the item
            addItem(name, cost, expiry, location);
            closeManualModal();
        };

        function markFieldError(fieldId) {
            document.getElementById(fieldId).classList.add('error');
        }

        function clearValidationErrors() {
            document.getElementById('error-message').style.display = 'none';
            ['item-name', 'item-cost', 'item-expiry', 'item-location'].forEach(id => {
                document.getElementById(id).classList.remove('error');
            });
        }

        function showErrorMessage() {
            document.getElementById('error-message').style.display = 'block';
        }

        window.closeManualModal = function() {
            clearValidationErrors();
            document.getElementById('manual-modal').classList.remove('show');
            document.getElementById('item-name').value = '';
            document.getElementById('item-cost').value = '';
            document.getElementById('item-expiry').value = '';
            document.getElementById('item-location').value = '';
        };

        window.openManualModal = function() {
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('item-expiry').value = today;
            document.getElementById('manual-modal').classList.add('show');
        };

        // Simple global variables
        let items = [];
        let wastedThisMonth = 0;

        // Tab functions
        function showDashboard() {
            document.getElementById('dashboard-content').classList.remove('hidden');
            document.getElementById('kitchen-content').classList.add('hidden');
            document.getElementById('dashboard-tab').classList.add('active');
            document.getElementById('kitchen-tab').classList.remove('active');
        }

        function showKitchen() {
            document.getElementById('dashboard-content').classList.add('hidden');
            document.getElementById('kitchen-content').classList.remove('hidden');
            document.getElementById('kitchen-tab').classList.add('active');
            document.getElementById('dashboard-tab').classList.remove('active');
        }

        // Modal functions
        function openManualModal() {
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('item-expiry').value = today;
            document.getElementById('manual-modal').classList.add('show');
        }

        function closeManualModal() {
            document.getElementById('manual-modal').classList.remove('show');
            document.getElementById('item-name').value = '';
            document.getElementById('item-cost').value = '';
            document.getElementById('item-expiry').value = '';
            document.getElementById('item-location').value = '';
        }

        function addManualItem() {
            alert('addManualItem function called!');
            
            const name = document.getElementById('item-name').value.trim();
            const cost = parseFloat(document.getElementById('item-cost').value);
            const expiry = document.getElementById('item-expiry').value;
            const location = document.getElementById('item-location').value;

            alert(`Values: ${name}, ${cost}, ${expiry}, ${location}`);

            if (!name) {
                alert('Please enter an item name');
                return;
            }
            if (!cost || cost <= 0) {
                alert('Please enter a valid cost');
                return;
            }
            if (!expiry) {
                alert('Please select an expiry date');
                return;
            }
            if (!location) {
                alert('Please select a location');
                return;
            }

            addItem(name, cost, expiry, location);
            closeManualModal();
        }

        function addDemoItems() {
            const demoItems = [
                { name: 'Organic Milk', cost: 4.99, expiry: getDateFromDays(5), location: 'fridge' },
                { name: 'Greek Yogurt', cost: 5.99, expiry: getDateFromDays(7), location: 'fridge' },
                { name: 'Baby Spinach', cost: 3.49, expiry: getDateFromDays(3), location: 'fridge' },
                { name: 'Whole Wheat Bread', cost: 2.99, expiry: getDateFromDays(14), location: 'pantry' },
                { name: 'Pasta Sauce', cost: 3.99, expiry: getDateFromDays(365), location: 'pantry' }
            ];

            demoItems.forEach(item => {
                addItem(item.name, item.cost, item.expiry, item.location);
            });

            alert('Demo items added!');
        }

        // Helper functions
        function getDateFromDays(days) {
            const date = new Date();
            date.setDate(date.getDate() + days);
            return date.toISOString().split('T')[0];
        }

        function getFoodEmoji(name) {
            const lowerName = name.toLowerCase();
            if (lowerName.includes('milk')) return '🥛';
            if (lowerName.includes('yogurt')) return '🥛';
            if (lowerName.includes('spinach')) return '🥬';
            if (lowerName.includes('bread')) return '🍞';
            if (lowerName.includes('sauce')) return '🍯';
            return '🍽️';
        }

        function calculateDaysLeft(expiryDate) {
            const today = new Date();
            const expiry = new Date(expiryDate);
            const diffTime = expiry - today;
            return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        }

        // Core functions
        function addItem(name, cost, expiry, location) {
            const newItem = {
                id: Date.now() + Math.random(),
                name: name,
                cost: cost,
                expiry: expiry,
                location: location,
                used: false,
                wasted: false,
                opened: location === 'fridge',
                remainingPercentage: 100
            };

            items.push(newItem);
            updateDisplay();
            
            // Save to localStorage
            localStorage.setItem('freshkeeper_items', JSON.stringify(items));
            
            // Sync with backend for notifications
            syncItemsWithBackend();
        }

        function updateDisplay() {
            updateKPIs();
            updateCounts();
            renderAtRiskItems();
            renderKitchenItems();
        }

        function updateKPIs() {
            const inventory = items.filter(item => !item.used && !item.wasted).reduce((sum, item) => sum + item.cost, 0);
            const atRisk = items.filter(item => !item.used && !item.wasted && calculateDaysLeft(item.expiry) <= 3).reduce((sum, item) => sum + item.cost, 0);

            document.getElementById('inventory-kpi').textContent = `$${inventory.toFixed(2)}`;
            document.getElementById('wasted-kpi').textContent = `$${wastedThisMonth.toFixed(2)}`;
            document.getElementById('at-risk-kpi').textContent = `$${atRisk.toFixed(2)}`;
            document.getElementById('total-value').textContent = `$${inventory.toFixed(2)}`;
        }

        function updateCounts() {
            const activeItems = items.filter(item => !item.used && !item.wasted);
            const fridgeCount = activeItems.filter(item => item.location === 'fridge').length;
            const pantryCount = activeItems.filter(item => item.location === 'pantry').length;

            document.getElementById('kitchen-count').textContent = activeItems.length;
            document.getElementById('fridge-count').textContent = fridgeCount;
            document.getElementById('pantry-count').textContent = pantryCount;
        }

        function renderAtRiskItems() {
            const atRiskItems = items.filter(item => 
                !item.used && !item.wasted && calculateDaysLeft(item.expiry) <= 3
            );

            const container = document.getElementById('at-risk-items');

            if (atRiskItems.length === 0) {
                container.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-state-icon">✅</div>
                        <p>No items at risk!</p>
                    </div>
                `;
                return;
            }

            container.innerHTML = atRiskItems.map(item => {
                const daysLeft = calculateDaysLeft(item.expiry);
                const urgencyClass = daysLeft <= 1 ? 'urgent' : 'at-risk';

                return `
                    <div class="food-item ${urgencyClass}">
                        <div class="food-item-content">
                            <div class="food-item-left">
                                <span class="food-emoji">${getFoodEmoji(item.name)}</span>
                                <div class="food-info">
                                    <div class="food-details">
                                        <div class="food-name">${item.name}</div>
                                    </div>
                                    <div class="food-meta">${daysLeft}d left • $${item.cost.toFixed(2)}</div>
                                </div>
                            </div>
                            <div class="food-actions">
                                <button onclick="markAsUsed(${item.id})" class="action-btn btn-used">Used</button>
                                <button onclick="markAsWasted(${item.id})" class="action-btn btn-wasted">Wasted</button>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }

        function renderKitchenItems() {
            const fridgeItems = items.filter(item => item.location === 'fridge' && !item.used && !item.wasted);
            const pantryItems = items.filter(item => item.location === 'pantry' && !item.used && !item.wasted);

            // Render fridge items
            const fridgeContainer = document.getElementById('fridge-items');
            if (fridgeItems.length === 0) {
                fridgeContainer.innerHTML = '<div class="empty-state"><p>No items in fridge</p></div>';
            } else {
                fridgeContainer.innerHTML = fridgeItems.map(item => {
                    const daysLeft = calculateDaysLeft(item.expiry);
                    const urgencyClass = daysLeft <= 3 ? 'at-risk' : '';

                    return `
                        <div class="food-item ${urgencyClass}">
                            <div class="food-item-content">
                                <div class="food-item-left">
                                    <span class="food-emoji">${getFoodEmoji(item.name)}</span>
                                    <div class="food-info">
                                        <div class="food-details">
                                            <div class="food-name">${item.name}</div>
                                        </div>
                                        <div class="food-meta">${daysLeft}d left • $${item.cost.toFixed(2)}</div>
                                    </div>
                                </div>
                                <div class="food-actions">
                                    <button onclick="markAsUsed(${item.id})" class="action-btn btn-used">Used</button>
                                    <button onclick="markAsWasted(${item.id})" class="action-btn btn-wasted">Wasted</button>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('');
            }

            // Render pantry items
            const pantryContainer = document.getElementById('pantry-items');
            if (pantryItems.length === 0) {
                pantryContainer.innerHTML = '<div class="empty-state"><p>No items in pantry</p></div>';
            } else {
                pantryContainer.innerHTML = pantryItems.map(item => {
                    const daysLeft = calculateDaysLeft(item.expiry);

                    let buttons;
                    if (item.opened) {
                        buttons = `
                            <button onclick="markAsUsed(${item.id})" class="action-btn btn-used">Used</button>
                            <button onclick="markAsWasted(${item.id})" class="action-btn btn-wasted">Wasted</button>
                        `;
                    } else {
                        buttons = `<button onclick="markAsOpened(${item.id})" class="action-btn btn-open">Open</button>`;
                    }

                    const noteHtml = !item.opened ? `<div class="food-note">💡 Expiry date will change once opened</div>` : '';

                    return `
                        <div class="food-item">
                            <div class="food-item-content">
                                <div class="food-item-left">
                                    <span class="food-emoji">${getFoodEmoji(item.name)}</span>
                                    <div class="food-info">
                                        <div class="food-details">
                                            <div class="food-name">${item.name}</div>
                                        </div>
                                        <div class="food-meta">${daysLeft}d left • ${item.cost.toFixed(2)}</div>
                                    </div>
                                </div>
                                <div class="food-actions">
                                    ${buttons}
                                </div>
                            </div>
                            ${noteHtml}
                        </div>
                    `;
                }).join('');
            }
        }

        function markAsUsed(itemId) {
            const item = items.find(i => i.id === itemId);
            item.used = true;
            updateDisplay();
        }

        function markAsWasted(itemId) {
            const item = items.find(i => i.id === itemId);
            item.wasted = true;
            wastedThisMonth += item.cost;
            updateDisplay();
        }

        function markAsOpened(itemId) {
            const item = items.find(i => i.id === itemId);
            item.opened = true;
            // Reduce expiry by 7 days when opened
            const currentExpiry = new Date(item.expiry);
            currentExpiry.setDate(currentExpiry.getDate() - 7);
            item.expiry = currentExpiry.toISOString().split('T')[0];
            updateDisplay();
        }

        // Initialize app
        updateDisplay();

        // Initialize push notifications
        initializePushNotifications();

        // Service Worker and Push Notification Setup
        async function initializePushNotifications() {
            if ('serviceWorker' in navigator && 'PushManager' in window) {
                try {
                    // Register service worker
                    const registration = await navigator.serviceWorker.register('/sw.js');
                    console.log('Service Worker registered:', registration);

                    // Request notification permission
                    const permission = await Notification.requestPermission();
                    if (permission === 'granted') {
                        console.log('Notification permission granted');
                        
                        // Subscribe to push notifications
                        await subscribeToPush(registration);
                    } else {
                        console.log('Notification permission denied');
                    }
                } catch (error) {
                    console.error('Service Worker registration failed:', error);
                }
            } else {
                console.log('Push messaging is not supported');
            }
        }

        async function subscribeToPush(registration) {
            try {
                // Public VAPID key (you'll need to generate this)
                const publicVapidKey = 'BP8rVQg0Cp1aVXUYJOFTKT8MJP5fBzKdXQvKf5K5QoZFq8ZkTYZ8LfHHqVGzYgT8lRZzqF8mJ5YzLfHwW5P8z-E';
                
                const subscription = await registration.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
                });

                console.log('Push subscription:', subscription);

                // Send subscription to your backend
                await sendSubscriptionToBackend(subscription);
            } catch (error) {
                console.error('Failed to subscribe to push notifications:', error);
            }
        }

        async function sendSubscriptionToBackend(subscription) {
            try {
                const response = await fetch('/api/subscribe', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        subscription: subscription,
                        items: items // Send current items for monitoring
                    })
                });

                if (response.ok) {
                    console.log('Subscription sent to backend successfully');
                } else {
                    console.error('Failed to send subscription to backend');
                }
            } catch (error) {
                console.error('Error sending subscription:', error);
            }
        }

        // Helper function to convert VAPID key
        function urlBase64ToUint8Array(base64String) {
            const padding = '='.repeat((4 - base64String.length % 4) % 4);
            const base64 = (base64String + padding)
                .replace(/-/g, '+')
                .replace(/_/g, '/');

            const rawData = window.atob(base64);
            const outputArray = new Uint8Array(rawData.length);

            for (let i = 0; i < rawData.length; ++i) {
                outputArray[i] = rawData.charCodeAt(i);
            }
            return outputArray;
        }

        // Update backend when items change
        function syncItemsWithBackend() {
            if (items.length > 0) {
                fetch('/api/update-items', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ items: items })
                }).catch(error => console.error('Failed to sync items:', error));
            }
        }
    </script>
</body>
</html>
