

class SellerDashboard {
    constructor() {
        this.keywords = [];
        this.currentStep = 1;
        this.maxSteps = 5;
        this.uploadedImages = [];
        this.maxImages = 5;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupCharacterCounts();
        this.setupFormValidation();
        this.initializeUploadArea();
        this.updateStepProgress();
    }

    setupEventListeners() {
        // Tab navigation
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', (e) => this.handleTabClick(e));
        });

        // Sidebar menu items
        document.querySelectorAll('.menu-item').forEach(item => {
            item.addEventListener('click', (e) => this.handleMenuClick(e));
        });

        // Stock controls
        const decreaseBtn = document.querySelector('.stock-btn[onclick="decreaseStock()"]');
        const increaseBtn = document.querySelector('.stock-btn[onclick="increaseStock()"]');
        
        if (decreaseBtn) decreaseBtn.onclick = () => this.decreaseStock();
        if (increaseBtn) increaseBtn.onclick = () => this.increaseStock();

        // Keyword functionality
        const addBtn = document.querySelector('.add-btn[onclick="addKeyword()"]');
        if (addBtn) addBtn.onclick = () => this.addKeyword();

        // Enter key for keyword input
        const keywordInput = document.getElementById('keywordInput');
        if (keywordInput) {
            keywordInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.addKeyword();
                }
            });
        }

        // Form submission
        document.querySelectorAll('.submit-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleSubmit(e));
        });

        // Form inputs for progress tracking
        this.setupFormProgressTracking();

        // Terms checkbox
        const agreeCheckbox = document.getElementById('agree');
        if (agreeCheckbox) {
            agreeCheckbox.addEventListener('change', () => this.updateSubmitButtons());
        }

        // Upload area click
        const uploadArea = document.querySelector('.upload-area');
        if (uploadArea) {
            uploadArea.addEventListener('click', () => this.triggerFileUpload());
        }
    }

    setupCharacterCounts() {
        // Product name character count
        const productNameInput = document.getElementById('productName');
        const charCountElement = document.getElementById('charCount');
        
        if (productNameInput && charCountElement) {
            productNameInput.addEventListener('input', () => {
                const length = productNameInput.value.length;
                charCountElement.textContent = `${length}/70`;
                
                if (length > 70) {
                    charCountElement.style.color = '#ff4444';
                } else if (length > 50) {
                    charCountElement.style.color = '#ff9800';
                } else {
                    charCountElement.style.color = '#999';
                }
            });
        }

        // Description character count
        const descriptionTextarea = document.getElementById('description');
        const descCharCountElement = document.getElementById('descCharCount');
        
        if (descriptionTextarea && descCharCountElement) {
            descriptionTextarea.addEventListener('input', () => {
                const length = descriptionTextarea.value.length;
                descCharCountElement.textContent = `${length}/255`;
                
                if (length > 255) {
                    descCharCountElement.style.color = '#ff4444';
                } else if (length > 200) {
                    descCharCountElement.style.color = '#ff9800';
                } else {
                    descCharCountElement.style.color = '#999';
                }
            });
        }
    }

    setupFormValidation() {
        // Real-time validation for required fields
        const requiredFields = [
            'productName',
            'description'
        ];

        requiredFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (field) {
                field.addEventListener('blur', () => this.validateField(field));
                field.addEventListener('input', () => this.clearFieldError(field));
            }
        });

        // Email validation for inquiry emails (if any)
        const emailFields = document.querySelectorAll('input[type="email"]');
        emailFields.forEach(field => {
            field.addEventListener('blur', () => this.validateEmail(field));
        });

        // Price validation
        const priceFields = document.querySelectorAll('.price-input');
        priceFields.forEach(field => {
            field.addEventListener('input', (e) => this.formatPriceInput(e.target));
            field.addEventListener('blur', () => this.validatePrice(field));
        });
    }

    setupFormProgressTracking() {
        const formInputs = document.querySelectorAll('input, select, textarea');
        
        formInputs.forEach(input => {
            input.addEventListener('change', () => {
                setTimeout(() => this.updateFormProgress(), 100);
            });
            input.addEventListener('input', () => {
                setTimeout(() => this.updateFormProgress(), 100);
            });
        });

        // Also track checkbox changes for delivery and payment options
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                setTimeout(() => this.updateFormProgress(), 100);
            });
        });
    }

    initializeUploadArea() {
        // Create hidden file input
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.multiple = true;
        fileInput.accept = 'image/*,video/*';
        fileInput.style.display = 'none';
        document.body.appendChild(fileInput);

        this.fileInput = fileInput;

        fileInput.addEventListener('change', (e) => this.handleFileUpload(e));

        // Update image counter
        this.updateImageCounter();
    }

    // Tab Management
   // Tab Management
handleTabClick(e) {
    const clickedTab = e.target;
    
    // Remove active class from all tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // Add active class to clicked tab
    clickedTab.classList.add('active');

    // Get form type from tab text or data attribute
    const tabText = clickedTab.textContent.trim();
    let formType = 'product'; // default
    
    if (tabText.includes('Auction')) {
        formType = 'auction';
    } else if (tabText.includes('Rental')) {
        formType = 'rental';
    }
    
    // Switch to the selected form
    this.switchForm(formType);
}


// Form Switching Method
switchForm(formType) {
    // Hide all form contents
    document.querySelectorAll('.form-content').forEach(form => {
        form.classList.remove('active');
        form.classList.add('hidden');
    });
    
    // Show selected form
    const selectedForm = document.getElementById(formType + '-form');
    if (selectedForm) {
        selectedForm.classList.remove('hidden');
        selectedForm.classList.add('active');
    }
    
    console.log(`Switched to: ${formType} form`);
}

    // Menu Management
    handleMenuClick(e) {
        const clickedItem = e.currentTarget;
        
        // Remove active class from all menu items
        document.querySelectorAll('.menu-item').forEach(item => {
            item.classList.remove('active');
        });

        // Add active class to clicked item
        clickedItem.classList.add('active');

        console.log(`Selected menu: ${clickedItem.querySelector('span:nth-child(2)').textContent}`);
    }

    // Stock Management
    increaseStock() {
        const stockInput = document.getElementById('stockNumber');
        if (stockInput) {
            let currentValue = parseInt(stockInput.value) || 1;
            currentValue++;
            stockInput.value = currentValue.toString().padStart(2, '0');
        }
    }

    decreaseStock() {
        const stockInput = document.getElementById('stockNumber');
        if (stockInput) {
            let currentValue = parseInt(stockInput.value) || 1;
            if (currentValue > 1) {
                currentValue--;
                stockInput.value = currentValue.toString().padStart(2, '0');
            }
        }
    }

    // Keyword Management
    addKeyword() {
        const keywordInput = document.getElementById('keywordInput');
        const keywordTagsContainer = document.getElementById('keywordTags');
        
        if (!keywordInput || !keywordTagsContainer) return;

        const keyword = keywordInput.value.trim();
        
        if (keyword === '') {
            this.showAlert('Please enter a keyword', 'warning');
            return;
        }

        if (this.keywords.includes(keyword.toLowerCase())) {
            this.showAlert('Keyword already exists', 'warning');
            return;
        }

        if (this.keywords.length >= 10) {
            this.showAlert('Maximum 10 keywords allowed', 'warning');
            return;
        }

        // Add keyword to array
        this.keywords.push(keyword.toLowerCase());

        // Create tag element
        const tag = document.createElement('div');
        tag.className = 'tag';
        tag.innerHTML = `
            <span>${keyword}</span>
            <i class="fas fa-times" onclick="dashboard.removeKeyword('${keyword.toLowerCase()}')"></i>
        `;

        keywordTagsContainer.appendChild(tag);

        // Clear input
        keywordInput.value = '';
        keywordInput.focus();

        // Update progress after adding keyword
        setTimeout(() => this.updateFormProgress(), 100);
    }

    removeKeyword(keyword) {
        const index = this.keywords.indexOf(keyword);
        if (index > -1) {
            this.keywords.splice(index, 1);
        }

        // Remove tag from DOM
        const tags = document.querySelectorAll('.tag');
        tags.forEach(tag => {
            if (tag.querySelector('span').textContent.toLowerCase() === keyword) {
                tag.remove();
            }
        });

        // Update progress after removing keyword
        setTimeout(() => this.updateFormProgress(), 100);
    }

    // File Upload Management
    triggerFileUpload() {
        if (this.uploadedImages.length >= this.maxImages) {
            this.showAlert(`Maximum ${this.maxImages} images allowed`, 'warning');
            return;
        }
        this.fileInput.click();
    }

    handleFileUpload(e) {
        const files = Array.from(e.target.files);
        
        files.forEach(file => {
            if (this.uploadedImages.length >= this.maxImages) {
                this.showAlert(`Maximum ${this.maxImages} images allowed`, 'warning');
                return;
            }

            // Validate file type
            if (!file.type.startsWith('image/') && !file.type.startsWith('video/')) {
                this.showAlert(`${file.name} is not a valid image or video file`, 'error');
                return;
            }

            // Validate file size (2MB for images)
            if (file.type.startsWith('image/') && file.size > 2 * 1024 * 1024) {
                this.showAlert(`${file.name} exceeds 2MB limit`, 'error');
                return;
            }

            this.uploadedImages.push({
                file: file,
                name: file.name,
                size: file.size,
                type: file.type
            });
        });

        this.updateImageCounter();
        this.updateUploadPreview();
        
        // Update progress after file upload
        setTimeout(() => this.updateFormProgress(), 100);
    }

    updateImageCounter() {
        const counterElement = document.querySelector('.upload-area + .character-count');
        if (counterElement) {
            counterElement.textContent = `${this.uploadedImages.length}/${this.maxImages}`;
        }
    }

    updateUploadPreview() {
        // This would typically show preview thumbnails
        // For now, just update the upload area appearance
        const uploadArea = document.querySelector('.upload-area');
        if (this.uploadedImages.length > 0) {
            uploadArea.style.borderColor = '#4caf50';
            uploadArea.style.backgroundColor = '#f0f8f0';
        }
    }

    // Form Validation
    validateField(field) {
        const value = field.value.trim();
        
        if (value === '') {
            this.showFieldError(field, 'This field is required');
            return false;
        }

        this.clearFieldError(field);
        return true;
    }

    validateEmail(field) {
        const email = field.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email && !emailRegex.test(email)) {
            this.showFieldError(field, 'Please enter a valid email address');
            return false;
        }

        this.clearFieldError(field);
        return true;
    }

    validatePrice(field) {
        const price = field.value.replace(/[^\d.]/g, '');
        
        if (price && (isNaN(price) || parseFloat(price) <= 0)) {
            this.showFieldError(field, 'Please enter a valid price');
            return false;
        }

        this.clearFieldError(field);
        return true;
    }

    showFieldError(field, message) {
        // Remove existing error
        this.clearFieldError(field);

        // Add error class
        field.style.borderColor = '#ff4444';
        
        // Create error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.style.color = '#ff4444';
        errorDiv.style.fontSize = '12px';
        errorDiv.style.marginTop = '5px';
        errorDiv.textContent = message;

        field.parentNode.appendChild(errorDiv);
    }

    clearFieldError(field) {
        field.style.borderColor = '#ddd';
        const errorDiv = field.parentNode.querySelector('.field-error');
        if (errorDiv) {
            errorDiv.remove();
        }
    }

    formatPriceInput(field) {
        let value = field.value.replace(/[^\d.]/g, '');
        
        // Handle decimal places
        const parts = value.split('.');
        if (parts.length > 2) {
            value = parts[0] + '.' + parts[1];
        }
        if (parts[1] && parts[1].length > 2) {
            value = parts[0] + '.' + parts[1].substring(0, 2);
        }

        field.value = value;
    }

    // Progress Tracking
    updateFormProgress() {
        const formSections = document.querySelectorAll('.form-section');
        const steps = document.querySelectorAll('.step');
        
        // Reset all steps to inactive
        steps.forEach(step => step.classList.remove('active'));

        // Check each form section and update corresponding step
        formSections.forEach((section, index) => {
            const sectionTitle = section.querySelector('h3')?.textContent;
            let stepIndex = this.getStepIndexFromSectionTitle(sectionTitle);
            
            if (stepIndex !== -1 && this.isSectionComplete(section)) {
                const correspondingStep = steps[stepIndex];
                if (correspondingStep) {
                    correspondingStep.classList.add('active');
                }
            }
        });

        // Always keep step 1 active if any field in basic info is filled
        const basicInfoSection = this.getBasicInfoSection();
        if (basicInfoSection && this.hasAnyFieldFilled(basicInfoSection)) {
            const firstStep = steps[0];
            if (firstStep) firstStep.classList.add('active');
        }
    }

    getStepIndexFromSectionTitle(sectionTitle) {
        const sectionMapping = {
            'Basic Information': 0,
            'Product specification': 1,
            'Price & Stock': 2,
            'Terms and Conditions': 3,
            'Submit': 4
        };
        
        return sectionMapping[sectionTitle] !== undefined ? sectionMapping[sectionTitle] : -1;
    }

    getBasicInfoSection() {
        const sections = document.querySelectorAll('.form-section');
        for (let section of sections) {
            const title = section.querySelector('h3')?.textContent;
            if (title === 'Basic Information') {
                return section;
            }
        }
        return null;
    }

    hasAnyFieldFilled(section) {
        const inputs = section.querySelectorAll('input, select, textarea');
        for (let input of inputs) {
            if (input.value.trim() !== '') {
                return true;
            }
        }
        // Also check if any keywords are added
        return this.keywords.length > 0 || this.uploadedImages.length > 0;
    }

    isSectionComplete(section) {
        const sectionTitle = section.querySelector('h3')?.textContent;
        
        switch (sectionTitle) {
            case 'Basic Information':
                return this.isBasicInfoComplete(section);
            case 'Product specification':
                return this.isProductSpecComplete(section);
            case 'Price & Stock':
                return this.isPriceStockComplete(section);
            case 'Terms and Conditions':
                return this.isTermsComplete(section);
            case 'Submit':
                return false; // Submit section is never "complete" until actually submitted
            default:
                return false;
        }
    }

    isBasicInfoComplete(section) {
        const productName = document.getElementById('productName');
        const category = section.querySelector('select');
        const description = document.getElementById('description');
        
        // Check required fields
        const hasRequiredFields = productName?.value.trim() && 
                                 category?.value && 
                                 description?.value.trim();
        
        // Optional: Require at least one keyword and one image
        const hasOptionalContent = this.keywords.length > 0 && this.uploadedImages.length > 0;
        
        return hasRequiredFields && hasOptionalContent;
    }

    isProductSpecComplete(section) {
        const brand = section.querySelector('input[type="text"]');
        const deliveryOptions = section.querySelectorAll('input[name="delivery"]:checked');
        const unitType = section.querySelector('select[name="unit"]');
        
        // At least brand, one delivery option, and unit type should be filled
        return brand?.value.trim() && 
               deliveryOptions.length > 0 && 
               unitType?.value;
    }

    isPriceStockComplete(section) {
        const unitPrice = section.querySelector('.price-input');
        const stock = document.getElementById('stockNumber');
        const paymentOptions = section.querySelectorAll('input[name="pay"]:checked');
        
        // Unit price, stock, and at least one payment option
        return unitPrice?.value.trim() && 
               stock?.value && 
               parseInt(stock.value) > 0 && 
               paymentOptions.length > 0;
    }

    isTermsComplete(section) {
        const agreeCheckbox = document.getElementById('agree');
        return agreeCheckbox?.checked;
    }

    updateStepProgress() {
        // This method is now handled by updateFormProgress
        // Keep for backward compatibility but actual logic moved to updateFormProgress
    }

    updateSubmitButtons() {
        const agreeCheckbox = document.getElementById('agree');
        const submitButtons = document.querySelectorAll('.submit-btn');
        
        const isFormValid = this.validateForm();
        const isAgreed = agreeCheckbox ? agreeCheckbox.checked : false;
        
        submitButtons.forEach(btn => {
            btn.disabled = !(isFormValid && isAgreed);
            btn.style.opacity = (isFormValid && isAgreed) ? '1' : '0.5';
        });
    }

    validateForm() {
        const productName = document.getElementById('productName');
        const description = document.getElementById('description');
        const category = document.querySelector('select');
        
        return productName?.value.trim() && 
               description?.value.trim() && 
               category?.value;
    }

    // Form Submission
    handleSubmit(e) {
        const button = e.target;
        const action = button.classList.contains('save') ? 'save' : 'publish';
        
        if (!this.validateForm()) {
            this.showAlert('Please fill in all required fields', 'error');
            return;
        }

        const agreeCheckbox = document.getElementById('agree');
        if (!agreeCheckbox?.checked) {
            this.showAlert('Please agree to the terms and conditions', 'error');
            return;
        }

        // Disable button during submission
        button.disabled = true;
        const originalText = button.textContent;
        button.textContent = action === 'save' ? 'Saving...' : 'Publishing...';

        // Collect form data
        const formData = this.collectFormData();

        // Simulate API call
        setTimeout(() => {
            if (action === 'save') {
                this.showAlert('Product saved successfully!', 'success');
            } else {
                this.showAlert('Product published successfully!', 'success');
            }

            // Reset button
            button.disabled = false;
            button.textContent = originalText;

            console.log('Form data:', formData);
        }, 2000);
    }

    collectFormData() {
        const formData = {
            productName: document.getElementById('productName')?.value,
            category: document.querySelector('select')?.value,
            description: document.getElementById('description')?.value,
            keywords: this.keywords,
            images: this.uploadedImages.map(img => img.name),
            specifications: {
                brand: document.querySelector('input[type="text"]')?.value,
                expireDate: document.querySelector('input[type="date"]')?.value,
                deliveryOptions: Array.from(document.querySelectorAll('input[name="delivery"]:checked')).map(cb => cb.value),
                unitType: document.getElementById('unit')?.value,
                packageType: document.querySelector('.spec-group input[type="text"]')?.value,
                weight: document.querySelector('input[placeholder="KG"]')?.value
            },
            pricing: {
                unitPrice: document.querySelector('.price-input')?.value,
                specialPrice: document.querySelectorAll('.price-input')[1]?.value,
                stock: document.getElementById('stockNumber')?.value,
                productCode: document.querySelector('.code-input')?.value,
                paymentOptions: Array.from(document.querySelectorAll('input[name="pay"]:checked')).map(cb => cb.value)
            },
            agreed: document.getElementById('agree')?.checked
        };

        return formData;
    }

    // Utility Methods
    showAlert(message, type = 'info') {
        // Create alert element
        const alert = document.createElement('div');
        alert.className = `alert alert-${type}`;
        alert.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 6px;
            color: white;
            font-size: 14px;
            z-index: 1000;
            max-width: 300px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            animation: slideIn 0.3s ease-out;
        `;

        // Set colors based on type
        const colors = {
            success: '#4caf50',
            error: '#ff4444',
            warning: '#ff9800',
            info: '#2196F3'
        };

        alert.style.backgroundColor = colors[type] || colors.info;
        alert.textContent = message;

        // Add close button
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '&times;';
        closeBtn.style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 18px;
            float: right;
            cursor: pointer;
            margin-left: 10px;
            line-height: 1;
        `;

        closeBtn.onclick = () => alert.remove();
        alert.appendChild(closeBtn);

        document.body.appendChild(alert);

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (alert.parentNode) {
                alert.remove();
            }
        }, 5000);
    }

    // Auto-save functionality
    enableAutoSave() {
        setInterval(() => {
            if (this.validateForm()) {
                const formData = this.collectFormData();
                localStorage.setItem('seller_dashboard_draft', JSON.stringify(formData));
                console.log('Auto-saved draft');
            }
        }, 30000); // Auto-save every 30 seconds
    }

    loadDraft() {
        const draft = localStorage.getItem('seller_dashboard_draft');
        if (draft) {
            const data = JSON.parse(draft);
            // Load draft data back into form
            console.log('Draft loaded:', data);
            return data;
        }
        return null;
    }
}

// Add CSS for alert animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Initialize dashboard when DOM is loaded
let dashboard;

document.addEventListener('DOMContentLoaded', function() {
    dashboard = new SellerDashboard();
    
    // Enable auto-save if needed
    // dashboard.enableAutoSave();
    
    console.log('Seller Dashboard initialized successfully');
});

// Global functions for backward compatibility
function addKeyword() {
    if (dashboard) dashboard.addKeyword();
}

function increaseStock() {
    if (dashboard) dashboard.increaseStock();
}

function decreaseStock() {
    if (dashboard) dashboard.decreaseStock();
}

// Export for module use if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SellerDashboard;
}
function switchForm(formType) {
    // Hide all form contents
    document.querySelectorAll('.form-content').forEach(form => {
        form.classList.remove('active');
        form.classList.add('hidden');
    });
    
    // Show selected form
    document.getElementById(formType + '-form').classList.add('active');
}

