'use client';

import { useState, useEffect } from 'react';

// 植物数据接口
interface Plant {
  name: string;
  url: string;
  default_weight: number;
  base_value: number;
}

// 修饰符数据接口
interface Modifier {
  id: string;
  name: string;
  emoji: string;
  multiplier: number;
  description: string;
  category: string;
}

// 修饰符数据接口
interface ModifierData {
  modifiers: Modifier[];
  formula: string;
  metadata: {
    totalModifiers: number;
    categories: string[];
    extractedFrom: string;
    extractedAt: string;
  };
}

export default function Calculator() {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [modifiers, setModifiers] = useState<Modifier[]>([]);
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);
  const [selectedModifiers, setSelectedModifiers] = useState<string[]>([]);
  const [baseMultiplier, setBaseMultiplier] = useState<'rainbow' | 'gold' | 'none'>('none');
  const [customWeight, setCustomWeight] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [friendBoost, setFriendBoost] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [modifierSearchTerm, setModifierSearchTerm] = useState('');

  // 加载植物和修饰符数据
  useEffect(() => {
    const loadData = async () => {
      try {
        // 加载植物数据
        const plantsResponse = await fetch('/data/plant_images.json');
        const plantsData = await plantsResponse.json();
        
        // 转换数据格式以匹配我们的接口
        const formattedPlants = plantsData.map((plant: Plant) => ({
          name: plant.name,
          url: plant.url,
          default_weight: plant.default_weight,
          base_value: plant.base_value
        }));
        
        setPlants(formattedPlants);

        // 加载修饰符数据
        const modifiersResponse = await fetch('/data/modifiers.json');
        const modifiersData: ModifierData = await modifiersResponse.json();
        setModifiers(modifiersData.modifiers);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // 计算植物价值
  const calculateValue = () => {
    if (!selectedPlant) return 0;

    // 基础价值是每公斤的价格
    const baseValue = selectedPlant.base_value;
    
    // 计算实际重量
    const actualWeight = customWeight || selectedPlant.default_weight;
    
    // 计算基础价值 × 重量
    let totalValue = baseValue * actualWeight;

    // 应用Friend Boost (百分比加成)
    totalValue *= (1 + friendBoost / 100);
    
    // 应用基础乘数 (Rainbow 50x 或 Gold 20x)
    if (baseMultiplier === 'rainbow') {
      totalValue *= 50;
    } else if (baseMultiplier === 'gold') {
      totalValue *= 20;
    }

    // 计算修饰符效果: (1 + Sum of Modifiers - Number of Modifiers)
    const selectedModifierObjects = modifiers.filter(mod => selectedModifiers.includes(mod.id));
    const sumOfModifiers = selectedModifierObjects.reduce((sum, mod) => sum + mod.multiplier, 0);
    const numberOfModifiers = selectedModifierObjects.length;
    
    const modifierEffect = 1 + sumOfModifiers - numberOfModifiers;
    
    // 应用修饰符效果
    totalValue *= Math.max(modifierEffect, 0.1); // 确保不会是负数或零
    
    // 计算单个植物的价值
    const singlePlantValue = totalValue;
    
    // 应用数量
    return singlePlantValue * quantity;
  };

  // 切换修饰符选择
  const toggleModifier = (modifierId: string) => {
    setSelectedModifiers(prev => 
      prev.includes(modifierId) 
        ? prev.filter(id => id !== modifierId)
        : [...prev, modifierId]
    );
  };

  // 过滤植物
  const filteredPlants = plants.filter(plant => 
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 过滤修饰符
  const filteredModifiers = modifiers.filter(modifier => 
    modifier.name.toLowerCase().includes(modifierSearchTerm.toLowerCase()) ||
    modifier.description.toLowerCase().includes(modifierSearchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex flex-col">
        <section className="py-12 md:py-16 bg-blue-100">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading calculator data...</p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-blue-100 py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 md:mb-3 text-green-600">
              Grow A Garden Calculator
            </h1>
            <p className="text-base md:text-lg mb-4 md:mb-6 max-w-3xl mx-auto">
              Calculate the exact value of your plants with mutations and modifiers. 
              Select a plant, choose your modifiers, and see the final value!
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-6 md:py-8 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="space-y-4">
            
            {/* Input Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 text-center">Calculator Input</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Plant Selection */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold">1. Select Plant</h3>
                  
                  {/* Search */}
                  <div>
                    <input
                      type="text"
                      placeholder="Search plants..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>

                  {/* Plant Grid */}
                  <div className="grid grid-cols-3 gap-2 max-h-80 overflow-y-auto">
                    {filteredPlants.map((plant) => (
                      <button
                        key={plant.name}
                        onClick={() => {
                          setSelectedPlant(plant);
                          setCustomWeight(0);
                          setQuantity(1);
                        }}
                        className={`aspect-square p-2 rounded-lg border-2 transition-all duration-200 flex flex-col items-center justify-center ${
                          selectedPlant?.name === plant.name
                            ? 'border-green-500 bg-green-50'
                            : 'border-gray-200 hover:border-green-300'
                        }`}
                      >
                        <img
                          src={`/data/images/${plant.name}.webp`}
                          alt={plant.name}
                          className="w-6 h-6 mb-1 object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                        <p className="text-xs font-medium capitalize text-center leading-tight">{plant.name}</p>
                        <p className="text-xs text-gray-500">{plant.base_value.toFixed(2)}💰</p>
                      </button>
                    ))}
                  </div>

                  {/* Selected Plant Info */}
                  {selectedPlant && (
                    <div className="p-3 bg-green-50 rounded-lg">
                      <h4 className="font-bold capitalize text-sm">{selectedPlant.name}</h4>
                      <p className="text-xs text-gray-600">Base Value: {selectedPlant.base_value.toFixed(2)}💰/kg</p>
                      <p className="text-xs text-gray-600">Default Weight: {selectedPlant.default_weight.toFixed(2)}kg</p>
                    </div>
                  )}
                </div>

                {/* Weight and Quantity Input */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold">2. Set Weight & Quantity</h3>
                  
                  {selectedPlant ? (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Weight (kg)
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          min="0"
                          value={customWeight || selectedPlant.default_weight}
                          onChange={(e) => setCustomWeight(parseFloat(e.target.value) || 0)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder={`Default: ${selectedPlant.default_weight}`}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Quantity
                        </label>
                        <input
                          type="number"
                          min="1"
                          value={quantity}
                          onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Friend Boost: {friendBoost}%
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={friendBoost}
                          onChange={(e) => setFriendBoost(parseInt(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>0%</span>
                          <span>50%</span>
                          <span>100%</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-gray-500 py-8">
                      <p>Select a plant first</p>
                    </div>
                  )}
                </div>

                {/* Multipliers */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold">3. Select Multipliers</h3>
                  
                  {/* Base Multiplier */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => setBaseMultiplier('none')}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        baseMultiplier === 'none'
                          ? 'bg-gray-500 text-white'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                    >
                      None (1x)
                    </button>
                    <button
                      onClick={() => setBaseMultiplier('gold')}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        baseMultiplier === 'gold'
                          ? 'bg-yellow-500 text-white'
                          : 'bg-yellow-100 hover:bg-yellow-200 text-yellow-700'
                      }`}
                    >
                      🥇Gold (20x)
                    </button>
                    <button
                      onClick={() => setBaseMultiplier('rainbow')}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        baseMultiplier === 'rainbow'
                          ? 'bg-purple-500 text-white'
                          : 'bg-purple-100 hover:bg-purple-200 text-purple-700'
                      }`}
                    >
                      🌈Rainbow (50x)
                    </button>
                  </div>

                  {/* Quick Modifiers */}
                  <div>
                    <input
                      type="text"
                      placeholder="Search modifiers..."
                      value={modifierSearchTerm}
                      onChange={(e) => setModifierSearchTerm(e.target.value)}
                      className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                    <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto">
                      {filteredModifiers.map((modifier) => (
                        <button
                          key={modifier.id}
                          onClick={() => toggleModifier(modifier.id)}
                          className={`px-3 py-2 rounded-lg text-sm font-medium transition-all text-center ${
                            selectedModifiers.includes(modifier.id)
                              ? 'bg-blue-500 text-white'
                              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                          }`}
                        >
                          <div className="text-base">{modifier.emoji}</div>
                          <div className="text-xs">{modifier.name}</div>
                          <div className="text-xs">({modifier.multiplier}x)</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 text-center">Calculation Result</h2>
              
              {selectedPlant ? (
                <div className="space-y-4">
                  {/* Final Value */}
                  <div className="p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg">
                    <h4 className="text-lg font-bold text-center">Final Value</h4>
                    <p className="text-3xl font-bold text-center text-green-600">
                      {calculateValue().toFixed(2)}💰
                    </p>
                  </div>

                  {/* Calculation Breakdown */}
                  <div className="space-y-2 text-sm">
                    <h5 className="font-semibold">Calculation Breakdown:</h5>
                    <div className="bg-gray-50 p-3 rounded">
                      <p><strong>Plant:</strong> {selectedPlant.name}</p>
                      <p><strong>Base Value:</strong> {selectedPlant.base_value.toFixed(2)}💰/kg</p>
                      <p><strong>Weight:</strong> {customWeight || selectedPlant.default_weight}kg</p>
                      <p><strong>Quantity:</strong> {quantity}</p>
                      <p><strong>Total Weight:</strong> {((customWeight || selectedPlant.default_weight) * quantity).toFixed(2)}kg</p>
                      
                      {baseMultiplier !== 'none' && (
                        <p><strong>Base Multiplier:</strong> {baseMultiplier === 'rainbow' ? '50x' : '20x'}</p>
                      )}
                      
                      {selectedModifiers.length > 0 && (
                        <div>
                          <p><strong>Selected Modifiers:</strong></p>
                          <ul className="ml-4 space-y-1">
                            {modifiers
                              .filter(mod => selectedModifiers.includes(mod.id))
                              .map(mod => (
                                <li key={mod.id} className="text-xs">
                                  {mod.emoji} {mod.name} ({mod.multiplier}x)
                                </li>
                              ))
                            }
                          </ul>
                          
                          {(() => {
                            const selectedMods = modifiers.filter(mod => selectedModifiers.includes(mod.id));
                            const sumOfModifiers = selectedMods.reduce((sum, mod) => sum + mod.multiplier, 0);
                            const numberOfModifiers = selectedMods.length;
                            const modifierEffect = 1 + sumOfModifiers - numberOfModifiers;
                            
                            return (
                              <div className="mt-2">
                                <p><strong>Modifier Effect:</strong></p>
                                <p className="text-xs">1 + {sumOfModifiers} - {numberOfModifiers} = {modifierEffect.toFixed(2)}x</p>
                              </div>
                            );
                          })()}
                        </div>
                      )}
                      
                      <div className="mt-2 pt-2 border-t border-gray-300">
                        <p><strong>Formula:</strong> (Base Value × Base Multiplier) × Modifier Effect</p>
                      </div>
                    </div>
                  </div>

                  {/* Reset Button */}
                  <button
                    onClick={() => {
                      setSelectedPlant(null);
                      setSelectedModifiers([]);
                      setBaseMultiplier('none');
                    }}
                    className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                  >
                    Reset Calculator
                  </button>
                </div>
              ) : (
                <div className="text-center text-gray-500">
                  <p>Select a plant to see the calculation result</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Formula Explanation */}
      <section className="py-8 md:py-10 bg-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">How the Calculator Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-green-700">Value Formula</h3>
                <div className="space-y-2">
                  <p className="font-mono text-sm bg-gray-100 p-2 rounded">
                    Final Value = (Base Value × Base Multiplier) × (1 + Sum of Modifiers - Number of Modifiers)
                  </p>
                  <ul className="text-sm space-y-1">
                    <li><strong>Base Value:</strong> The plant's default selling price</li>
                    <li><strong>Base Multiplier:</strong> Rainbow (50x) or Gold (20x)</li>
                    <li><strong>Modifiers:</strong> Various mutations and effects</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-blue-700">Tips</h3>
                <ul className="text-sm space-y-1">
                  <li>• Rainbow multiplier gives the highest base boost (50x)</li>
                  <li>• Some modifiers have very high multipliers but are rare</li>
                  <li>• The formula subtracts the number of modifiers to balance high-multiplier combinations</li>
                  <li>• Weather and pet effects can stack with plant mutations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Transform Your Garden Into a Value Powerhouse</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the hidden potential in every seed you plant. Our intelligent calculator reveals the true worth of your garden, 
              helping you make smarter growing decisions that maximize both yield and value.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-green-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Smart Plant Selection</h3>
              <p className="text-gray-600">
                Choose from over 100 carefully curated plants, each with real-time market values. Our grow a garden calculator 
                helps you identify which crops offer the best return on your gardening investment.
              </p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Instant Value Calculation</h3>
              <p className="text-gray-600">
                Get precise calculations in seconds. Factor in weight, quantity, and quality multipliers to see exactly 
                how much your harvest is worth, making garden planning more strategic than ever.
              </p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-purple-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Optimize Your Strategy</h3>
              <p className="text-gray-600">
                Use quality modifiers and seasonal factors to understand how growing conditions impact value. 
                Perfect for both hobby gardeners and commercial growers seeking maximum efficiency.
              </p>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Garden Value Matters</h3>
                <p className="text-gray-600 mb-4">
                  Every gardener dreams of a bountiful harvest, but understanding the economic value of your crops 
                  takes your gardening to the next level. Whether you&apos;re growing for your family table or considering 
                  a market garden, knowing your garden&apos;s worth helps you make informed decisions.
                </p>
                <p className="text-gray-600">
                  Our grow a garden calculator bridges the gap between passion and profit, showing you which plants 
                  deliver the best value per square foot, helping you optimize space and maximize returns.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Real-time market-based valuations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Quality and seasonal modifiers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Comprehensive plant database</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Easy-to-use interface for all skill levels</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}